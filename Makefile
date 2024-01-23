up: 
	docker-compose -f './docker-compose.yaml' up -d --build app
	docker-compose logs -f app

down: 
	docker-compose -f './docker-compose.yaml' down