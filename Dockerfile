FROM python:3.7-alpine
ENV PYTHONUNBUFFERED 1
RUN apk add tzdata \
    && cp /usr/share/zoneinfo/US/Eastern /etc/localtime
RUN mkdir -p /poof/poof-back
WORKDIR /poof/poof-back
COPY . /poof/poof-back
RUN apk update \
    && apk add --no-cache --virtual .build-deps postgresql postgresql-dev gcc python3-dev git curl wget vim musl-dev libffi-dev openssl-dev libxml2-dev zlib-dev libxslt-dev jpeg-dev \
    && rm -rf /poof/poof-back.git \
    && find /poof/poof-back -type f -iname '.*' -exec chmod -x {} \; \
    && find /poof/poof-back -type f -iname '*.py' -exec chmod -x {} \; \
    && find /poof/poof-back -type f -iname '*.txt' -exec chmod -x {} \; \
    && find /poof/poof-back -type f -iname '*.html' -exec chmod -x {} \; \
    && find /poof/poof-back -type f -iname '*.js' -exec chmod -x {} \; \
    && find /poof/poof-back -type f -iname '*.css' -exec chmod -x {} \; \
    && find /poof/poof-back -type f -iname '*.sql' -exec chmod -x {} \; \
    && find /poof/poof-back -type f -iname '*.yml' -exec chmod -x {} \; \
    && find /poof/poof-back -type f -iname 'Dockerfile*' -exec chmod -x {} \; \
    && pip install --upgrade pip \
    && pip install -r /poof/poof-back/requirements.txt