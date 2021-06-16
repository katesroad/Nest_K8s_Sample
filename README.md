# README

## Build docker images

- Build iamges

  - build development image:

  ```sh
  cd app
  docker build -f Dockerfile.dev -t dockeridohyeah/cicd-dev:latest  .
  ```

  - build production image:

  ```sh
  cd app
  docker build -f Dockerfile.prod -t dockeridohyeah/cicd-prod:latest  .
  ```

- Pull images

  - For development:

  ```sh
  docker push dockeridohyeah/cicd-dev:latest
  ```

  - For production

  ```
  docker pull dockeridohyeah/cicd-prod:latest
  ```
