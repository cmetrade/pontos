import boto3
import time

ec2 = boto3.client('ec2')

def lambda_handler(event, context):
    # Check if there are running instances
    running_instances = ec2.describe_instances(
        Filters=[{'Name': 'instance-state-name', 'Values': ['running']}]
    )
    
    # Count the number of running instances
    running_instance_count = sum([len(reservation['Instances']) for reservation in running_instances['Reservations']])

    if running_instance_count >= 1:
        print(f"Aborting. {running_instance_count} instance(s) already running.")
        return "Aborted due to existing running instance(s)."
    
    # Launch EC2 instance if no running instances
    response = ec2.run_instances(
        ImageId='ami-07ee79c8d2833a29a',  # Replace with your AMI ID
        InstanceType='t2.medium',          # Choose your instance type
        MinCount=1,
        MaxCount=1,
        KeyName='pontos-web-key',          # Optional: Replace with your key pair
        SubnetId='subnet-01b2adf18ee88f92d',  # Optional: Specify subnet
        SecurityGroupIds=['sg-0b6881ff21a4aac98']  # Optional: Replace with security group
    )
    
    instance_id = response['Instances'][0]['InstanceId']
    print(f"EC2 Instance created with ID: {instance_id}")
    
    # Wait for some time (replace with your actual task's duration or condition)
    time.sleep(3600)  # Wait for 1 hour (or adjust this time)
    
    # Terminate the instance
    ec2.terminate_instances(InstanceIds=[instance_id])
    print(f"EC2 Instance {instance_id} terminated.")
    
    return instance_id
