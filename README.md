# 제목

CRA+eslint+apollo boilerplate

### `yarn install`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Folder Structure

- 공통적으로 지향하는 내부 폴더 패턴입니다. 없다면 안만들어도 됩니다.
  - components // 부모 폴더에 속하는 컴포넌트
  - hooks // 부모 폴더에 속하는 훅
  - utils // 부모 폴더에 속하는 function, type ...

---

- src
  - Common // 도메인에 종속되지 않은 모듈들 입니다.
    - components
    - hooks
    - utils
  - pages //
    - Shared // 두번 이상 사용되는 공용이 아닌 모듈을 모아둔 곳 입니다.
      - components
      - hooks
      - utils
    - [Features] // 해당 도메인에서만 사용됩니다.
      - components
      - hooks
      - utils
  - store // 전역 변수를 관리하는 폴더입니다.

분업 시 각 도메인별로 자유롭고 독립적이게 작업할 수 있는 장점이라 생각하여 설계한 구조입니다.

## 라이브러리

- emotion
<!-- - react-router-dom -->
- @types/\*
- eslint
- prettier
- react
- **typescript**
