# Base image
FROM amazon/aws-cli AS base

# Installing prerequisite packages

RUN yum -y install curl wget git gzip tar jq unzip nano vi


FROM base AS base2
RUN wget   https://releases.hashicorp.com/terraform/1.6.4/terraform_1.6.4_linux_amd64.zip \
  && unzip terraform_1.6.4_linux_amd64.zip \
  && mv terraform /usr/local/bin \
  && rm terraform_1.6.4_linux_amd64.zip
RUN yum install openssh-clients sudo  -y
RUN yum update
RUN yum install gcc44 gcc-c++ libgcc44 cmake   make -y



WORKDIR /workspace

ENTRYPOINT /bin/bash