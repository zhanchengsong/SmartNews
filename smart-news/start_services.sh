#!/usr/bin/env bash
python ./classifying_model_service/server/classifying_server.py &
python ./recommendation_service/server/recommendation_service.py &
python ./recommendation_service/server/click_log_processor.py &

python ./backend_server/service.py &
