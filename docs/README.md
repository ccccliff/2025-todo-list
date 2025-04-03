## 1. 기술 스택

- React + TypeScript
- TailwindCss
- JSON Server
- React Query

## 2. 폴더 구조

src
|-- api/
|-- components/
|-- hooks/
|-- pages/
|-- types/
|-- utils/
|-- App.tsx
|-- main.tsx
|\_\_index.css

## 3. 상태 관리 전략

- API Data : TanStack Query
- UI State : useState
- Global State : None

## 4. 주요 컴포넌트 흐름

- TodoInput -> useMutation
- TodoList -> useQuery
