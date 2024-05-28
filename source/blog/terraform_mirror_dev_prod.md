Title: Mirroring Terraform Code Between Development and Production
Date: 2024-05-23 10:20
Category: Python
Tags: terraform, devops, aws, cloud, iac, infrastructure as code
Slug: mirroring-terraform-dev-prod
Authors: Marc Leonard
Summary: How to mirror Terraform code between development and production environments.

There are a lot of opinions (and recommended practices) on how to manage Terraform code between development and production environments. One common approach is to have separate Terraform modules (folders)  for each environment. This can be a good approach, but it can also lead to a lot of duplication and potential for drift between the environments. I went down the rabbithole to determine the most ergonomic way to accomplish this. 

I found that the lowest common denominators to accomplish this are:
- Use the `AWS_PROFILE` environment variable to switch between AWS accounts.
- Use the `terraform workspace` command to switch between environments (corresponding to the AWS accounts).
- If you need to create a json `outputs` file, use the `AWS_PROFILE` environment variable to prepend the name of the output file.

Obviously, you can put these commands in a script to link them together, but these are the main steps. The workflow goes as follows:

1. Create a new workspace for each environment.
    - `terraform workspace new dev`
    - `terraform workspace new prod`
2. Set up two AWS profiles in your `~/.aws/credentials` file.
    - `dev`
    - `prod`
3. Set the `AWS_PROFILE` environment variable to the desired profile.
    - `export AWS_PROFILE=dev`
4. Switch to the desired workspace.
    - `terraform workspace select ${AWS_PROFILE}`
5. Apply the Terraform code.
   - `terraform apply`
6. If you need to create a json `outputs` file, use the `AWS_PROFILE` environment variable to prepend the name of the output file.
    - `terraform output -json > ${AWS_PROFILE}_outputs.json`


Using this approach, there are a few concessions you will need to make, such as:
- You will need to remember to set the `AWS_PROFILE` environment variable before running any Terraform commands.
- You will need to remember to switch to the correct workspace before running any Terraform commands.
- You will need to remember to prepend the `AWS_PROFILE` environment variable to the output file name if you need to create a json `outputs` file.

But, even given those, I found this to be the best way to simultaneously manage Terraform code between development and production environments. 
