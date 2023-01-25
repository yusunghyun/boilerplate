# B2B 어드민

### `yarn install`

### `yarn start`

# 현재 세팅(230115)

1. create react app + TS
2. eslint + prettier setting([mobile app version](https://github.com/algo-care/algocare-app/pull/1453))
3. nvmrc
4. git template (issue, PR)
5. pre-commit, husky (eslint, prettier, TS)
6. yarn generate setting(apollo X)

# Default Spec

프레임워크: React + hooks

언어: Typescript

에디터: Eslint + Prettier

node: 16.13.0

상태관리: apollo-client

통신: graphql

스타일: emotion

테스트: jest

에셋: **Svg**, png

디자인툴: Figma

api문서: GraphiQL

소스관리: Github/algocare

## Folder Structure

- 공통적으로 지향하는 폴더 내부 패턴입니다. 없다면 안만들어도 됩니다.
  - components // 부모 폴더에 속하는 컴포넌트
  - hooks // 부모 폴더에 속하는 훅
  - utils // 부모 폴더에 속하는 function, type, constant ...

ex)

- Home
  - components // Home 관련 작업 시 자주 쓰이는 컴포넌트
  - hooks
  - utils
  - HomeHeader
    - components // HomeHeader에만 쓰이는 컴포넌트
    - hooks
    - utils
  - HomeContent
    - components
    - hooks
    - utils

## Code Convention

https://www.notion.so/algocare/fcddaf758ecb429ebb340c914ecfdeb8?v=55d9d2e0d2eb414c97d1d100b8e524d0

## Git Strategy

[추구하는 git-flow](https://techblog.woowahan.com/2553/)

1. github issue를 생성한다.
2. 해당 issue번호로 develop에서 브랜치를 생성한다
3. feature/#번호-간략제목 ex) feature/#123-header-ui
4. main, staging, develop에 merge될 때는 꼭 github PR을 이용한다.

## 주요 라이브러리

- react
- typescript
- apollo-client
- react-admin(?)
- eslint+prettier
