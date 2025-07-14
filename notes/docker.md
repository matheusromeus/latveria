sudo groupadd docker
sudo usermod -aG docker $USER

docker run hello-world
docker pull ubuntu
docker run -it ubuntu

docker ps
docker ps -a
docker rm <name>

data doesn't persist in dockers
for that - volumes, bind mounts

docker run -it --name ubuntu --volume test:/mnt ubuntu -> *the volume here is /mnt inside the ubuntu container*

docker volume ls
var/lib/docker/volumes

docker volume rm test -> cant remove unless the container is removed

docker container prune -> removes all stopped containers


docker run -it --name ubuntu --volume /home/kevnroy:/mnt ubuntu

any changes made by the container will also be persisted on your system

docker run -p 8080:80 nginx -> exposes nginx on port 80. port 8080 is host mapped to port 80 inside the container