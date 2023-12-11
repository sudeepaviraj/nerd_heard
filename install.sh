#!/bin/bash

# Prompt user for Personal Access Token (PAT)
read -p "Enter your GitHub Personal Access Token (PAT): " github_pat

# Prompt user for GitHub repository URL
read -p "Enter your GitHub repository URL: " github_repo_url

# Prompt user for domain for Nginx configuration
read -p "Enter your domain for Nginx configuration (e.g., uni.darkevil.buzz): " domain

# Clone GitHub repository using the provided PAT
git clone "$github_repo_url" /path/to/your/app

# Update package list
sudo apt update

# Install Nginx
sudo apt install -y nginx

# Create a new server block configuration for the specified domain
sudo bash -c "cat <<EOL > /etc/nginx/sites-available/$domain
server {
    listen 80;
    server_name $domain;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    access_log /var/log/nginx/$domain_access.log;
    error_log /var/log/nginx/$domain_error.log;
}
EOL"

# Create a symbolic link to enable the new site
sudo ln -s /etc/nginx/sites-available/$domain /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Reload Nginx to apply changes
sudo systemctl reload nginx

# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate from Let's Encrypt using Certbot
sudo certbot --nginx -d $domain

# Install Node.js and PM2
sudo apt install -y nodejs npm
sudo npm install -g pm2

# Navigate to the app directory
cd /path/to/your/app

# Install Node.js dependencies
npm install

# Run the Python script using PM2
pm2 start your_python_script.py --name your_app_name

# Display a message indicating successful setup
echo "Setup completed successfully. Nginx configured with HTTPS, Node.js and PM2 installed, and your Python script is running."
