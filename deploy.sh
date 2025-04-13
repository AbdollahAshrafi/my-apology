#!/bin/bash

# Initialize Git repository if it doesn't exist
if [ ! -d ".git" ]; then
    git init
fi

# Add all files to Git
git add .

# Commit changes
git commit -m "Deploying apology web app"

echo "Local Git repository is ready"
echo "To set up GitHub and deploy to your server, follow these steps:"
echo ""
echo "1. Create a new repository on GitHub (without initializing it)"
echo ""
echo "2. Connect your local repository to GitHub:"
echo "   git remote add github https://github.com/AbdollahAshrafi/my-apology/git"
echo "   git branch -M main"
echo "   git push -u github main"
echo ""
echo "3. On your server, create a bare Git repository:"
echo "   ssh user@your-server-ip 'mkdir -p ~/my-apology.git && cd ~/my-apology.git && git init --bare'"
echo ""
echo "4. Add the server as a remote:"
echo "   git remote add server ssh://user@your-server-ip/~/my-apology.git"
echo ""
echo "5. Set up the post-receive hook on your server:"
echo "   ssh user@your-server-ip 'cat > ~/my-apology.git/hooks/post-receive << EOF"
echo "   #!/bin/bash"
echo "   GIT_WORK_TREE=/path/to/your/web/root git checkout -f"
echo "   EOF"
echo "   chmod +x ~/my-apology.git/hooks/post-receive'"
echo ""
echo "6. Push to both GitHub and your server:"
echo "   git push github main"
echo "   git push server main"
echo ""
echo "Replace 'YOUR_USERNAME' with your GitHub username"
echo "Replace 'user@your-server-ip' with your actual server credentials"
echo "Replace '/path/to/your/web/root' with your actual web server root directory" 