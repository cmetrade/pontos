#!/bin/bash

# Step 1: List all running EC2 instances (change region if needed)
running_instances=$(aws ec2 describe-instances \
  --filters "Name=instance-state-name,Values=running" \
  --query "Reservations[*].Instances[*].InstanceId" \
  --output text)

# Step 2: Check if there are any running instances
if [ -z "$running_instances" ]; then
  echo "No running instances found."
else
  echo "Running instances: $running_instances"

  # Step 3: Terminate each running instance
  for instance_id in $running_instances; do
    echo "Terminating instance: $instance_id"
    aws ec2 terminate-instances --instance-ids $instance_id
  done

  echo "Termination commands sent for all running instances."
fi
