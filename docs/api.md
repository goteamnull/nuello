<!-- TOC -->

- [1. API Documentation](#1-api-documentation)
    - [1.1. Example API Error Format](#11-example-api-error-format)
    - [1.2. GET /](#12-get-)
    - [1.3. GET /boards/:id](#13-get-boardsid)
    - [1.4. GET /cards/:id](#14-get-cardsid)
    - [1.5. GET /ui](#15-get-ui)
    - [1.6. GET /api/boards](#16-get-apiboards)
        - [1.6.1. Controller#Action](#161-controlleraction)
        - [1.6.2. Expected parameters](#162-expected-parameters)
        - [1.6.3. Example Response](#163-example-response)
    - [1.7. POST /api/boards](#17-post-apiboards)
        - [1.7.1. Controller#Action](#171-controlleraction)
        - [1.7.2. Expected Payload](#172-expected-payload)
        - [1.7.3. Successful Response](#173-successful-response)
            - [1.7.3.1. Example Response](#1731-example-response)
        - [1.7.4. Error Response](#174-error-response)
    - [1.8. GET /api/boards/:id](#18-get-apiboardsid)
        - [1.8.1. Controller#Action](#181-controlleraction)
        - [1.8.2. Expected Payload](#182-expected-payload)
        - [1.8.3. Successful Response](#183-successful-response)
            - [1.8.3.1. Example Response](#1831-example-response)
        - [1.8.4. Error Response](#184-error-response)
    - [1.9. POST /api/lists](#19-post-apilists)
        - [1.9.1. Controller#Action](#191-controlleraction)
        - [1.9.2. Expected Payload](#192-expected-payload)
        - [1.9.3. Successful Response](#193-successful-response)
            - [1.9.3.1. Example Response](#1931-example-response)
        - [1.9.4. Error Response](#194-error-response)
    - [1.10. PUT/PATCH /api/lists/:id](#110-putpatch-apilistsid)
        - [1.10.1. Controller#Action](#1101-controlleraction)
        - [1.10.2. Expected Payload](#1102-expected-payload)
        - [1.10.3. Successful Response](#1103-successful-response)
            - [1.10.3.1. Example Response](#11031-example-response)
        - [1.10.4. Error Response](#1104-error-response)
    - [1.11. POST /api/cards](#111-post-apicards)
        - [1.11.1. Controller#Action](#1111-controlleraction)
        - [1.11.2. Expected Payload](#1112-expected-payload)
        - [1.11.3. Successful Response](#1113-successful-response)
            - [1.11.3.1. Example Response](#11131-example-response)
        - [1.11.4. Error Response](#1114-error-response)
    - [1.12. GET /api/cards/:id](#112-get-apicardsid)
        - [1.12.1. Controller#Action](#1121-controlleraction)
        - [1.12.2. Expected Payload](#1122-expected-payload)
        - [1.12.3. Successful Response](#1123-successful-response)
            - [1.12.3.1. Example Response](#11231-example-response)
        - [1.12.4. Error Response](#1124-error-response)
    - [1.13. PUT/PATCH /api/cards/:id](#113-putpatch-apicardsid)
        - [1.13.1. Controller#Action](#1131-controlleraction)
        - [1.13.2. Expected Payload](#1132-expected-payload)
            - [1.13.2.1. Example Payload](#11321-example-payload)
        - [1.13.3. Successful Response](#1133-successful-response)
            - [1.13.3.1. Example Response](#11331-example-response)
        - [1.13.4. Error Response](#1134-error-response)
    - [1.14. POST /api/comments](#114-post-apicomments)
        - [1.14.1. Controller#Action](#1141-controlleraction)
        - [1.14.2. Expected Payload](#1142-expected-payload)
        - [1.14.3. Successful Response](#1143-successful-response)
            - [1.14.3.1. Example Response](#11431-example-response)
        - [1.14.4. Error Response](#1144-error-response)

<!-- /TOC -->

# 1. API Documentation

## 1.1. Example API Error Format

All of the `/api` routes use the following format to return errors:

```json
{
  "error": "Invalid board id provided"
}
```

## 1.2. GET /

This route is used to render the template which renders the assets so that React can take over and render our boards index.

## 1.3. GET /boards/:id

This route is also used to render the template. If we don’t have this route, users will not be able to navigate directly to boards. They would need to access `/` and then click on a board, every time.

## 1.4. GET /cards/:id

Same as `GET /boards/:id`.

## 1.5. GET /ui

This page lists the static ui designs which should be used to build the React components.

## 1.6. GET /api/boards

Get all boards from the database. This does not return any nested data.

### 1.6.1. Controller#Action

`api/boards#index`

### 1.6.2. Expected parameters

None

### 1.6.3. Example Response

```json
[
  {
    "id": 1,
    "title": "Web dev",
    "created_at": "2017-10-04T05:57:02.777Z",
    "updated_at": "2017-10-04T05:57:02.777Z"
  },
  {
    "id": 2,
    "title": "Cooking",
    "created_at": "2017-10-04T15:29:04.095Z",
    "updated_at": "2017-10-04T15:29:04.095Z"
  }
]
```

## 1.7. POST /api/boards

Creates a board.

### 1.7.1. Controller#Action

`api/boards#create`

### 1.7.2. Expected Payload

```json
{
  "board": {
    "title": "My new board"
  }
}
```

### 1.7.3. Successful Response

The new board is returned in JSON format with a 201 response status code.

#### 1.7.3.1. Example Response

```json
{
  "id": 12,
  "title": "My new board",
  "created_at": "2017-10-06T23:08:28.375Z",
  "updated_at": "2017-10-06T23:08:28.375Z"
}
```

### 1.7.4. Error Response

If no title is provided, an error will be returned with a 422 “Unprocessable Entity” status code.

## 1.8. GET /api/boards/:id

Retrieve the board with the given `id`.

### 1.8.1. Controller#Action

`api/boards#show`

### 1.8.2. Expected Payload

None

### 1.8.3. Successful Response

The board is returned with the following nested data:

- board -\>
  - lists -\>
    - list -\>
      - cards -\>
        - card

Cards do not include all of the card data. This response includes only the following data for cards: `id`, `title`, `due_date`, `labels`, `description`, `list_id`, `board_id`, `position`, `comments_count`.

The response status code is 200.

#### 1.8.3.1. Example Response

```json
{
  "id": 1,
  "title": "Web dev",
  "created_at": "2017-10-04T05:57:02.777Z",
  "updated_at": "2017-10-04T05:57:02.777Z",
  "lists": [
    {
      "id": 3,
      "title": "CSS",
      "board_id": 1,
      "created_at": "2017-10-04T06:53:39.302Z",
      "updated_at": "2017-10-04T06:53:39.302Z",
      "position": 65535.0,
      "cards": [
        {
          "id": 7,
          "title": "1",
          "due_date": null,
          "labels": [
            "red",
            "purple"
          ],
          "description": "Selectors",
          "list_id": 3,
          "board_id": 1,
          "position": 65535.0,
          "comments_count": 0
        }
      ]
    }
  ]
}
```

### 1.8.4. Error Response

If the board doesn’t exist an error will be returned with a 404 status code.

## 1.9. POST /api/lists

Creates a list.

### 1.9.1. Controller#Action

`api/lists#create`

### 1.9.2. Expected Payload

NOTE: The `board_id` where the list will reside is required.

```json
{
  "board_id": 1,
  "list": { 
    "title": "My list"
  }
}
```

### 1.9.3. Successful Response

The list is returned in JSON form with a 201 status code.

#### 1.9.3.1. Example Response

```json
{
  "id": 10,
  "title": "My list",
  "board_id": 1,
  "created_at": "2017-10-06T23:40:26.606Z",
  "updated_at": "2017-10-06T23:40:26.606Z",
  "position": 65535.0
}
```

### 1.9.4. Error Response

If a board with the provided `board_id` doesn’t exist, an error will be returned with a 404 status code. If no title is provided, an error is returned with a 422 “Unprocessable Entity” status code.

## 1.10. PUT/PATCH /api/lists/:id

Update a list.

### 1.10.1. Controller#Action

`api/lists#update`

### 1.10.2. Expected Payload

Any combination of `title` and `position` can be provided. The only requirement is that at least one must be provided.

```json
{
  "title": "Updated title",
  "position": 137882
}
```

### 1.10.3. Successful Response

The list is returned in JSON form with a 200 status code.

#### 1.10.3.1. Example Response

```json
{
  "id": 1,
  "title": "Updated title",
  "position": 137882.0,
  "board_id": 1,
  "created_at": "2017-10-04T05:57:07.222Z",
  "updated_at": "2017-10-06T23:48:44.540Z"
}
```

### 1.10.4. Error Response

If a list with the provided `id` doesn’t exist, an error will be returned with a 404 status code. If no title or position is provided, an error is returned with a 422 “Unprocessable Entity” status code.

## 1.11. POST /api/cards

Creates a card. This also generates a card action describing that the card was added to the given list.

### 1.11.1. Controller#Action

`api/cards#create`

### 1.11.2. Expected Payload

NOTE: The `list_id` where the card will reside is required.

```json
{
  "list_id": 13,
  "card": {
    "title": "My new card"
  }
}
```

### 1.11.3. Successful Response

The new card is returned in JSON format with a 201 response status code.

#### 1.11.3.1. Example Response

```json
{
  "id": 9,
  "title": "My new card",
  "description": "",
  "labels": [],
  "list_id": 13,
  "position": 65535.0,
  "archived": false,
  "created_at": "2017-10-08T17:54:55.285Z",
  "updated_at": "2017-10-08T17:54:55.285Z",
  "due_date": null,
  "completed": false,
  "board_id": 1,
  "comments_count": 0
}
```

### 1.11.4. Error Response

If an invalid (or no) `list_id` is provided, an error will be returned with a 404 response status code. The only required field is the title. If no title (or a blank one) is provided, a 422 “Unprocessable Entity” status code will be returned along with an error describing the problem.

## 1.12. GET /api/cards/:id

Retrieve the card with the given `id`.

### 1.12.1. Controller#Action

`api/cards#show`

### 1.12.2. Expected Payload

None

### 1.12.3. Successful Response

The card is returned in JSON format. The JSON also includes the card’s comments and actions nested within the card object.

#### 1.12.3.1. Example Response

```json
{
  "id": 9,
  "title": "My new card",
  "description": "",
  "labels": [],
  "list_id": 13,
  "position": 65535.0,
  "archived": false,
  "created_at": "2017-10-08T17:54:55.285Z",
  "updated_at": "2017-10-08T17:54:55.285Z",
  "due_date": null,
  "completed": false,
  "board_id": 1,
  "comments_count": 0,
  "comments": [],
  "actions": [
    {
      "id": 49,
      "description": " added this card to My list",
      "created_at": "2017-10-08T17:54:55.319Z",
      "updated_at": "2017-10-08T17:54:55.319Z",
      "card_id": 9
    }
  ]
}
```

### 1.12.4. Error Response

If no card exists with the given `id`, an error response will be returned with a 404 status code.

## 1.13. PUT/PATCH /api/cards/:id

Update a card. This also generates card actions in the following situations:

- Due date was added
- Due date was removed
- Due date was changed
- Completion status was changed
- Card was moved to a different list
- Card was archived
- Card was sent back to the board from the archive

### 1.13.1. Controller#Action

`api/cards#update `

### 1.13.2. Expected Payload

At least one attribute must be included in a `"card"`object in the payload. The allowed attributes are:

- `title`
- `list_id`
- `position`
- `description`
- `archived`
- `due_date`
- `completed`
- `labels`

#### 1.13.2.1. Example Payload

```json
{
  "card": {
    "title": "My updated title",
    "completed": true
  }
}
```

### 1.13.3. Successful Response

The updated card will be returned in JSON format. The returned object also includes the card’s actions nested within the `card` object. That is because certain updates generate new actions which need to be displayed.

#### 1.13.3.1. Example Response

```json
{
  "title": "My updated title",
  "completed": true,
  "list_id": 13,
  "due_date": null,
  "id": 9,
  "archived": false,
  "description": "",
  "labels": [],
  "position": 65535.0,
  "created_at": "2017-10-08T17:54:55.285Z",
  "updated_at": "2017-10-08T18:15:25.017Z",
  "board_id": 1,
  "comments_count": 0,
  "actions": [
    {
      "id": 50,
      "description": " marked the due date complete",
      "created_at": "2017-10-08T18:15:25.014Z",
      "updated_at": "2017-10-08T18:15:25.014Z",
      "card_id": 9
    },
    {
      "id": 49,
      "description": " added this card to My list",
      "created_at": "2017-10-08T17:54:55.319Z",
      "updated_at": "2017-10-08T17:54:55.319Z",
      "card_id": 9
    }
  ]
}
```

### 1.13.4. Error Response

If no card exists with the given `id`, a 404 status code is returned with an error. If an empty title is provided, or no attributes are provided, a 422 “Unprocessable Entity” status code is returned along with an error.

## 1.14. POST /api/comments

Create a comment on a card.

### 1.14.1. Controller#Action

`api/comments#create`

### 1.14.2. Expected Payload

NOTE: The `card_id` where the comment will reside is required.

```json
{
  "card_id": 9,
  "comment": {
    "text": "This is my comment"
  }
}
```

### 1.14.3. Successful Response

The new comment is returned in JSON format.

#### 1.14.3.1. Example Response

```json
{
  "id": 3,
  "text": "This is my comment",
  "card_id": 9,
  "created_at": "2017-10-08T18:23:59.803Z",
  "updated_at": "2017-10-08T18:23:59.803Z"
}
```

### 1.14.4. Error Response

If no card exists with the given `id`, a 404 status code will be returned with an error. If no `text` (or an empty one) is provided, a 422 “Unprocessable Entity” status code will be returned with an error.
