### intro on virtualization

Virtualization as “the simulation of the software and/or hardware upon which other software runs.” Virtualization has been in use for many years, but it is best known for enabling cloud computing. In cloud environments, hardware virtualization is used to run many instances of operating systems (OSs) on a single physical server while keeping each instance separate.

operating system virtualization has a similar concept; it provides multiple virtualized OSs above a single actual OS kernel. 

like VMs virtualize even the hardware (using a hypervisor?), container only virtualize from the OS onwards.

Docker allows software to bundle their configuration and dependencies and isolate them from your operating system.

- like a VM. but better. More accurately, containers are OS-level virtualization. (Operating system (OS) virtualization provides a separate virtualized view of the OS to each application, thereby keeping each application isolated from all others on the server)

It is an isolated OS process.
The resulting difference between VMs and containers is that there is hardly any overhead when running containers; they only need to run a single process.
Uses the same kernel for every container, making it lightweight.
Quick to scale because they are lightweight.


Image. Images are immutable files, you cant edit after youve created one. However you can see existing images to create a new image by adding layers on top of existing ones.

Each instance of an image is a container. Containers exist only in runtime



- We utilize containers to create immutable execution environments for our Node.js and React projects.
- Containers also make it easy to include multiple services with our projects.
- Containers encapsulate your application into a single package.
- This package will then include all of the dependencies with the application. As a result, each container can run isolated from the other containers.
- Containers prevent the application inside from accessing files and resources of the device.

ECS is just container orchestration. you can use ec2 or fargate with it.

for one ec2, ecs is not needed.

ecs manages the containers inside the ec2 and not the ec2.

create ec2 instances, join them to an ecs cluster, manage ec2 OS,

if you do not want to manage the infra, you make use of fargate.

To create an image, we start with a Dockerfile.

Example Dockerfile:

```bash
FROM node:18-alpine

WORKDIR /app

COPY package*.json

RUN npm install

RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init

COPY . .

CMD ["npm", "run", "dev"]
```

**WORKDIR** - tells the rest of the commands that the working directory is ‘/app’. just like cd.

the steps of the dockerfile matters because of the caching that works in docker.

docker ps -a //all containers


### persistent data storage

volumes, bind mounts, tempfs mounts

volumes are the new version.
*tempfs is used for something different altogether*

volumes - better in prod
bind mounts - better in dev

docker manages the lifecycle of the containers

## essential docker commands

- docker image ls -> show all images
- docker ps -> running containers
- docker ps -a -> show all containers including stopped ones
- docker stop -> stop a container
- docker container prune -> removes all stopped containers
- docker run -p 5000:80 -d -rm nginx -> run in background, opened to a port and deletes after it stops.
- docker exec -> run a command on an already running container
- docker exec -it *container* 

---
#docker