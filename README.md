# fseason.info

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