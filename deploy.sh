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
echo "To deploy to your server, follow these steps:"
echo ""
echo "1. On your server, create a bare Git repository:"
echo "   ssh user@your-server-ip 'mkdir -p ~/apology-web.git && cd ~/apology-web.git && git init --bare'"
echo ""
echo "2. Add the remote repository:"
echo "   git remote add origin ssh://user@your-server-ip/~/apology-web.git"
echo ""
echo "3. Push your code:"
echo "   git push origin main"
echo ""
echo "4. On your server, set up the post-receive hook:"
echo "   ssh user@your-server-ip 'cat > ~/apology-web.git/hooks/post-receive << EOF"
echo "   #!/bin/bash"
echo "   GIT_WORK_TREE=/path/to/your/web/root git checkout -f"
echo "   EOF"
echo "   chmod +x ~/apology-web.git/hooks/post-receive'"
echo ""
echo "Replace 'user@your-server-ip' with your actual server credentials"
echo "Replace '/path/to/your/web/root' with your actual web server root directory" 