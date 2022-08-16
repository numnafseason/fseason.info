# fseason.info

## 서버 기본 상태

```
.vscode-server 폴더 사이즈 - 199M
```

## 최초 설치 상태

```
[guser@nodejs ~]$ node -v
v12.13.1
[guser@nodejs ~]$ npm -v
6.12.1
[guser@nodejs ~]$ npm ls -g --depth=0
/web/.nvm/versions/node/v12.13.1/lib
└── npm@6.12.1
[guser@nodejs ~]$ nvm install 16.16.0
[guser@nodejs ~]$ nvm alias default 16.16.0
[guser@nodejs ~]$ npm ls -g --depth=0
/web/.nvm/versions/node/v16.16.0/lib
├── corepack@0.10.0
└── npm@8.11.0

[guser@nodejs ~]$ npm i pm2 --location=global
[guser@nodejs ~]$ pm2 install pm2-logrotate
//pm2 로그 사이즈만 M 로 제한 처리함.
[guser@nodejs ~]$ pm2 set pm2-logrotate:max_size 1m
```

## JEST 테스트 프래임워크 사용

### 테스트 모니터링 모드

```powershell
npx jest --watch
```

### 테스트 커버리지 확인

```powershell
npx jest --coverage   
```

- puppeteer - 헤드리스 크롬(화면에 UI를 그리지 않고 browser 실행) 설치
- portfinder - 사용가능한 포트를 찾아주는 유틸

```powershell
npm i --save-dev puppeteer
npm i --save-dev portfinder
```

## 린트

```powershell
npm i --save-dev eslint
npm i --save-dev eslint-plugin-jest
```

- "lint":"eslint meadowlark.js lib" pakage.json 추가

## 경로

- 프로토콜://호스트:포트/경로?쿼리스트링#해시
- 해시(fragment)는 브라우저에서만 사용

## 템플릿 엔진 선택
<<<<<<< HEAD
=======

# typescript 설정
## tsconfig.json 생성
```powershell
npm i -D typescript @types/express @types/node
npx tsc --init
```
- "lint":"eslint meadowlark.js lib" pakage.json 추가
>>>>>>> 33695427fae05be1bd8846ef1005f6054b0fb907
