# MyFootBall

## 해외 축구 일정 및 순위 확인

기존 프로젝트 React + Nest.js -> Next.js app router로 마이그레이션 진행

기존 프로젝트 링크 : https://github.com/Leekee0905/MyFootball

![image](https://github.com/user-attachments/assets/e6f5c73e-6680-40ce-a666-31c860ec1c40)


## 소개

해외 축구 리그 정보 제공 페이지입니다.

React + NestJS 를 사용한 프로젝트를 Next.js 의 Route Handler를 사용한 서버리스 배포 환경으로 마이그레이션 진행하였습니다.

- 리그별 일정
    - 월별 일정
    - 팀별 일정
- 리그별 순위

## 기술적 의사결정

### Framework

<aside>
<img src="https://www.soaple.io/static/post/8/cover-image.png" alt="https://www.soaple.io/static/post/8/cover-image.png" width="40px" /> 

> #### Next.js
> Next.js는 React 기반의 프레임워크로, 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원하며, 간편한 페이지 라우팅과 서버리스 API 구축이 가능합니다.
기존 프로젝트의 간단한 백엔드 로직을 Next.js의 Route Handler를 통해 편하게 구현할 수 있어 Next.js를 사용하기로 결정했습니다.

  

</aside>

### Programming Language

<aside>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" width="40px" />  
  
> #### TypeScript  
> TypeScript는 JavaScript에 타입 시스템을 추가한 언어로, 코드의 가독성과 유지보수성을 높이며, JavaScript와 호환성을 유지하면서도 강력한 타입 검사를 제공합니다.

</aside>

### State Management Libraries

<aside>
<img src="https://avatars.githubusercontent.com/u/72518640?v=4" alt="https://avatars.githubusercontent.com/u/72518640?v=4" width="40px" />   
  
  > #### TanStack Query
> TanStack Query는 서버 상태를 관리하는 라이브러리로, 데이터를 fetching, caching, 동기화, 무효화 등의 기능을 제공하며 비동기 로직을 간편하게 작성하고 유지보수성을 높일 수 있습니다.

</aside>


<aside>
  
<img src="https://github.com/user-attachments/assets/c3f616d4-9885-4040-9cb8-79edbf35baad" width="40px"/>

  > #### Zustand  
> Zustand는 간단하고 가벼운 React 상태 관리 라이브러리로, 불필요한 코드를 줄이고, 전역 상태를 쉽게 공유하며 관리할 수 있게 해줍니다.
현재 프로젝트에서는 리그를 관리하는 버튼의 상태를 관리하고 있습니다.

</aside>

### Styling

<aside>
<img src="https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu" alt="https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu" width="40px" />  
  
  > #### Tailwind CSS
> Tailwind CSS는 Utility-First CSS 프레임워크로, 미리 정의된 클래스들을 조합하여 빠르고 일관된 스타일링을 제공하며, 쉽고 자유로운 커스텀 기능을 제공하고 있습니다.

</aside>

## 구현 내용

- **기존 컨텐츠 마이그레이션**
    - 디자인 패턴 적용 (Container-Presentational 패턴)
        - Next.js의 app router를 활용하여 페이지 컴포넌트를 데이터 fetching하는 Container로 전환
        - UI 렌더링은 Presentational Component로 분리하여 유지보수성과 재사용성 향상
    - NestJS 백엔드 로직 옮기기
        - Route Handler를 사용해 데이터를 원하는 형식으로 재구조화하여 REST API 구현
        - 무료 API 사용으로 인한 429 Error 해결을 위해 백오프 전략 구현
        - `Promise.race()` 를 사용하여 최대 대기 시간 제한
    - 컴포넌트 분리 세분화
        - Table 컴포넌트의 코드량을 400줄에서 61줄로 대폭 축소
        - 일정 페이지 컴포넌트는 601줄에서 55줄로 단순화하여 코드 가독성과 유지보수성을 개선
- **성능 개선**
    - **페이지 로딩 속도 및 사용자 경험 개선**
        - **CLS(Cumulative Layout Shift) 개선:**
            - 요소에 기본적인 width, height 값을 지정하지 않을 경우 발생하는 레이아웃 이동을 방지하기 위해 skeleton UI나 기본 크기를 설정함으로써 페이지의 안정성을 높임
                
                → Lighthouse 점수 크게 개선
                
    - **빠른 초기 로딩 속도 구현**
        - **`prefetchQuery()` 사용:**
            - React Query의 prefetchQuery 기능을 활용해 데이터를 미리 fetch함으로써 초기 로딩 속도를 향상

## 트러블 슈팅

- **빌드시** `TypeError: fetch failed` **에러 발생**
    
    ![image](https://github.com/user-attachments/assets/370e4e24-c058-4441-90eb-5d1c7fb5c1c5)

    - **분석** : 빌드 시 prerendering 중에 fetch 함수를 사용함에 있어 문제가 생겼을 것이다.
    - **원인** :
        - `getWeeklyLeagueSchedule()`가 API Route Handler(`/api/schedule/home`)를 호출하는데, 이 요청이 서버 컴포넌트(`RootLayout.tsx`) 내부에서 실행됨.
        - Next.js 15에서는 서버 컴포넌트에서 fetch 요청 시, 내부 API 요청이 실패할 가능성이 있음. (환경 변수 접근 문제, 네트워크 제한 등)
    - **해결** : `prefetchQuery`의 `queryFn` 함수에 `"use client"` 를 추가하여 클라이언트 측에서 실행되도록 변경

## 결과

### 성능

![image](https://github.com/user-attachments/assets/913d5ebd-ce1a-46fe-aa1d-fc79de62ea23)

![image](https://github.com/user-attachments/assets/8f396ae8-bb33-496d-ac7a-7f44a9571506)

![image](https://github.com/user-attachments/assets/df0d9be6-ecbe-42d1-8bf1-b2ca17da1970)

![image](https://github.com/user-attachments/assets/cf56d2c9-40cc-4ea4-bcb0-7d6fba9e8927)

### 홈

![image](https://github.com/user-attachments/assets/248d9aa5-9db2-48d3-99b5-02b532b7c3cd)

### 일정

![image](https://github.com/user-attachments/assets/3e54e76a-74ff-491b-956c-005ea4082b22)

![image](https://github.com/user-attachments/assets/26b234d5-335e-46af-9396-ab138013cd91)

### 테이블

![image](https://github.com/user-attachments/assets/37988c66-9676-44c8-b4f4-537b7d9edcce)

## 회고

- 빌드 에러를 겪으면서 Next.js의 서버 컴포넌트와 클라이언트 컴포넌트 활용에 대해 더 자세히 공부해야겠다고 생각하였습니다. 동시에 그 기본이되는 React의 서버 컴포넌트에 대해 공부해야겠다 생각했습니다.
- CLS가  LightHouse 점수에 많은 영향을 끼친다는 점을 알게 되었습니다. 안정적인 레이아웃을 구성하기 위해서 어떻게 UI를 구성해야 할지 공부해야겠다 생각하였습니다.
