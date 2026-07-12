#!/bin/bash
set -e  # 遇到错误立即停止

echo ">>> [1/5] 拉取最新代码..."
git pull origin main

echo ">>> [2/5] 安装依赖..."
npm ci

echo ">>> [3/5] 构建VuePress..."
npm run docs:build

echo ">>> [4/5] 重启Nginx容器加载新dist..."
docker restart help-center

echo ">>> [5/5] 验证服务可用性..."
sleep 2
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8080)

if [ "$HTTP_CODE" == "200" ]; then
    echo ">>> ✅ 部署成功！HTTP状态码: $HTTP_CODE"
    echo ">>> 访问地址: http://localhost:8080"
else
    echo ">>> ❌ 部署异常！HTTP状态码: $HTTP_CODE"
    exit 1
fi