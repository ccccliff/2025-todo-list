# todoList API명세서

- JSON Server 기반 명세서입니다.
- todos 데이터 페칭

--

## 공통 정보

- Base URL: `http://localhost:3001`
- 사용 기술: JSON Server
- 데이터 포맷: JSON
- 인증: 없음

--

## 엔드포인트

| 메서드 | 경로         | 설명            |
| ------ | ------------ | --------------- |
| GET    | `/todos`     | 모든 할 일 조회 |
| POST   | `/todos`     | 할 일 추가      |
| PATCH  | `/todos/:id` | 할 일 수정      |
| DELETE | `/todos/:id` | 할 일 삭제      |

--

## 데이터 예시

- {
  "id" : "todo1",
  "title" : "todo1",
  "description" : "work",
  "isCompleted" : false,
  "dueDate" : "2025-04-03"
  }
