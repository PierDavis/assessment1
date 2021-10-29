/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'git is a Source Code Management system, meaning git manages files (your source code). Git can track changes and save all versions of a file and upload files to local and external repositories, and other basic operations.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

const gitHubDefinition = 'GitHub is a web-based platform for developers and companies to build and maintain their software. Developers can use GitHub to collaborate on shared files, and local files can be pushed to GitHub through git commands.'
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/ let init = {
    description: 'git init intializes (creates) a local repositiory (directory) in the open file',
    code: 'git init',
};

//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: 'git clone would copy an existing repository from GitHub to local file system (repository)',
    code: 'git clone INSERT-REPO-URL',
};

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: 'git status gives information on the current repository',
    code: 'git status',
};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: 'git add creates a repository to store and track the file(s) the user wants to have tracked',
    code: 'git add .' or 'git remote add origin URL',
};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: 'git commit is comparable to saving a file, it preserves the file as it is at that particular moment in time', 
    code: 'git commit -m 'unique relevant comment',
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: 'git push is the final command needed to upload a file or folder to a repository, it pushes or sends the existing file to the repository',
    code: ''git push -u origin main' or 'git push' after intial push',
};