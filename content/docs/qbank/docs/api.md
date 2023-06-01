---
title: "API"
weight: 3
# bookFlatSection: false
bookToc: true
# bookHidden: false
# bookCollapseSection: false
# bookComments: false
# bookSearchExclude: false
---

<!-- auto_injected_below -->
<!-- Generator: Widdershins v4.0.1 -->

<h1 id="qbank-api">QBank API v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

REST API for the Question Bank.
Education project, Serendipity platform.

Base URLs:

* <a href="http://localhost:8080">http://localhost:8080</a>

<h1 id="qbank-api-information">Information</h1>

## get__

`GET /`

*Sends information about the API*

Provides information about the API like `name`, `version`, `purpose`.

> Example responses

> 200 Response

```json
{
  "data": {
    "name": "QBank API",
    "version": "v0.1.0",
    "purpose": "REST API for the Question Bank.\nEducation project, Serendipity platform.\n"
  }
}
```

<h3 id="get__-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|API Details|Inline|

<h3 id="get__-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|object|false|none|none|
|»» name|string|false|none|none|
|»» version|string|false|none|none|
|»» purpose|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|QBank API|
|version|v0.1.0|
|purpose|REST API for the Question Bank.
Education project, Serendipity platform.
|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="qbank-api-questions">Questions</h1>

## get__questions

`GET /questions`

*Return a collection of questions*

<h3 id="get__questions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filters|query|[req_filters](#schemareq_filters)|false|Additional filters JSON in string serialized format|
|paginator|query|[req_paginator](#schemareq_paginator)|false|Paginator JSON in string serialized format|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "content": "string",
      "type": "MCQ",
      "answers": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "content": "string"
        }
      ]
    }
  ],
  "paginator": {
    "page": 1,
    "size": 10,
    "count": 100
  }
}
```

<h3 id="get__questions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Question collection|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<h3 id="get__questions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|[[res_question_trimmed](#schemares_question_trimmed)]|false|none|none|
|»» id|string(uuid)|false|none|none|
|»» content|string|false|none|none|
|»» type|string|false|none|none|
|»» answers|[[res_answer](#schemares_answer)]|false|none|none|
|»»» id|string(uuid)|false|none|none|
|»»» content|string|false|none|none|
|» paginator|[res_paginator](#schemares_paginator)|false|none|none|
|»» page|integer|false|none|none|
|»» size|integer|false|none|none|
|»» count|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MCQ|
|type|STR|

<aside class="success">
This operation does not require authentication
</aside>

## post__questions

`POST /questions`

*Create a new question*

Create new question from provided data.

> Body parameter

```json
{
  "content": "What is the answer for life?",
  "type": "MCQ",
  "answers": [
    {
      "content": "That is a mystery",
      "is_correct": true
    }
  ],
  "tags": [
    1,
    2,
    3
  ]
}
```

<h3 id="post__questions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[req_question](#schemareq_question)|true|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

<h3 id="post__questions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Question created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Validation Error|[validation_error](#schemavalidation_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<h3 id="post__questions-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|[res_identifier](#schemares_identifier)|false|none|none|
|»» id|string(uuid)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get__questions_{id}

`GET /questions/{id}`

*Return a single question by id*

<h3 id="get__questions_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Identifier|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "content": "string",
    "type": "MCQ",
    "answers": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "content": "string"
      }
    ],
    "tags": [
      {
        "id": 1,
        "name": "exam:5-scholarship",
        "desc": "Grade 5 Scholarship"
      },
      {
        "id": 2,
        "name": "exam:ordinary-level",
        "desc": "GCE Ordinary Level"
      },
      {
        "id": 3,
        "name": "exam:advanced-level",
        "desc": "GCE Advanced Level"
      },
      {
        "id": 4,
        "name": "year:2021",
        "desc": "2021"
      },
      {
        "id": 5,
        "name": "subject:math",
        "desc": "Mathematics"
      },
      {
        "id": 6,
        "name": "paper:1",
        "desc": "Paper I"
      },
      {
        "id": 7,
        "name": "q:1",
        "desc": "q:1"
      },
      {
        "id": 8,
        "name": "lang:si-lk",
        "desc": "Sinhala"
      },
      {
        "id": 9,
        "name": "lang:ta-lk",
        "desc": "Tamil"
      },
      {
        "id": 10,
        "name": "lang:en-gb",
        "desc": "English"
      }
    ]
  }
}
```

<h3 id="get__questions_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Question|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<h3 id="get__questions_{id}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|[res_question](#schemares_question)|false|none|none|
|»» id|string(uuid)|false|none|none|
|»» content|string|false|none|none|
|»» type|string|false|none|none|
|»» answers|[[res_answer](#schemares_answer)]|false|none|none|
|»»» id|string(uuid)|false|none|none|
|»»» content|string|false|none|none|
|»» tags|[object]|false|none|none|
|»»» id|integer|false|none|none|
|»»» name|string|false|none|none|
|»»» desc|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MCQ|
|type|STR|

<aside class="success">
This operation does not require authentication
</aside>

## delete__questions_{id}

`DELETE /questions/{id}`

*Delete a question along with it's answers*

<h3 id="delete__questions_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Identifier|

> Example responses

> 400 Response

```json
{
  "errors": {
    "code": "string",
    "message": "string",
    "trace": "string"
  }
}
```

<h3 id="delete__questions_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Question deleted|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="qbank-api-question-content">Question Content</h1>

## put__questions_{id}_content

`PUT /questions/{id}/content`

*Update the content of a question*

> Body parameter

```json
{
  "content": "What is the answer for life?"
}
```

<h3 id="put__questions_{id}_content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Identifier|
|body|body|object|true|none|
|» content|body|string|false|none|

> Example responses

> 400 Response

```json
{
  "errors": {
    "code": "string",
    "message": "string",
    "trace": "string"
  }
}
```

<h3 id="put__questions_{id}_content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Question content updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Validation Error|[validation_error](#schemavalidation_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="qbank-api-question-tags">Question Tags</h1>

## put__questions_{id}_tags

`PUT /questions/{id}/tags`

*Edit the set of tags of a question*

> Body parameter

```json
[
  1,
  2,
  3
]
```

<h3 id="put__questions_{id}_tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Identifier|
|body|body|[req_tags](#schemareq_tags)|true|none|

> Example responses

> 400 Response

```json
{
  "errors": {
    "code": "string",
    "message": "string",
    "trace": "string"
  }
}
```

<h3 id="put__questions_{id}_tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Tags updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Validation Error|[validation_error](#schemavalidation_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="qbank-api-question-answers">Question Answers</h1>

## post__questions_{id}_answers

`POST /questions/{id}/answers`

*Add a new answer to an existing question*

Create a new answer from provided data.

> Body parameter

```json
{
  "content": "That is a mystery",
  "is_correct": true
}
```

<h3 id="post__questions_{id}_answers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[req_answer](#schemareq_answer)|true|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }
}
```

<h3 id="post__questions_{id}_answers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Question created|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Validation Error|[validation_error](#schemavalidation_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<h3 id="post__questions_{id}_answers-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|[res_identifier](#schemares_identifier)|false|none|none|
|»» id|string(uuid)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## put__questions_{id}_answers_{aid}

`PUT /questions/{id}/answers/{aid}`

*Update the content of an existing answer*

> Body parameter

```json
{
  "content": "That is a mystery",
  "is_correct": true
}
```

<h3 id="put__questions_{id}_answers_{aid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Identifier|
|aid|path|string(uuid)|true|Identifier|
|body|body|[req_answer](#schemareq_answer)|true|none|

> Example responses

> 400 Response

```json
{
  "errors": {
    "code": "string",
    "message": "string",
    "trace": "string"
  }
}
```

<h3 id="put__questions_{id}_answers_{aid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Answer updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Validation Error|[validation_error](#schemavalidation_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<aside class="success">
This operation does not require authentication
</aside>

## delete__questions_{id}_answers_{aid}

`DELETE /questions/{id}/answers/{aid}`

*Delete an answer of a question*

<h3 id="delete__questions_{id}_answers_{aid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Identifier|
|aid|path|string(uuid)|true|Identifier|

> Example responses

> 400 Response

```json
{
  "errors": {
    "code": "string",
    "message": "string",
    "trace": "string"
  }
}
```

<h3 id="delete__questions_{id}_answers_{aid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Answer deleted|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="qbank-api-tags">Tags</h1>

## get__tags

`GET /tags`

*Return a collection of tags*

<h3 id="get__tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filters|query|[req_filters](#schemareq_filters)|false|Additional filters JSON in string serialized format|
|paginator|query|[req_paginator](#schemareq_paginator)|false|Paginator JSON in string serialized format|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "exam:5-scholarship",
      "desc": "Grade 5 Scholarship"
    },
    {
      "id": 2,
      "name": "exam:ordinary-level",
      "desc": "GCE Ordinary Level"
    },
    {
      "id": 3,
      "name": "exam:advanced-level",
      "desc": "GCE Advanced Level"
    },
    {
      "id": 4,
      "name": "year:2021",
      "desc": "2021"
    },
    {
      "id": 5,
      "name": "subject:math",
      "desc": "Mathematics"
    },
    {
      "id": 6,
      "name": "paper:1",
      "desc": "Paper I"
    },
    {
      "id": 7,
      "name": "q:1",
      "desc": "q:1"
    },
    {
      "id": 8,
      "name": "lang:si-lk",
      "desc": "Sinhala"
    },
    {
      "id": 9,
      "name": "lang:ta-lk",
      "desc": "Tamil"
    },
    {
      "id": 10,
      "name": "lang:en-gb",
      "desc": "English"
    }
  ],
  "paginator": {
    "page": 1,
    "size": 10,
    "count": 100
  }
}
```

<h3 id="get__tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Question collection|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Domain Error|[generic_error](#schemageneric_error)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Service Error|[generic_error](#schemageneric_error)|

<h3 id="get__tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» data|[object]|false|none|none|
|»» id|integer|false|none|none|
|»» name|string|false|none|none|
|»» desc|string|false|none|none|
|» paginator|[res_paginator](#schemares_paginator)|false|none|none|
|»» page|integer|false|none|none|
|»» size|integer|false|none|none|
|»» count|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_req_filters">req_filters</h2>
<!-- backwards compatibility -->
<a id="schemareq_filters"></a>
<a id="schema_req_filters"></a>
<a id="tocSreq_filters"></a>
<a id="tocsreq_filters"></a>

```json
"{\"key\": \"value\"}"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

<h2 id="tocS_req_paginator">req_paginator</h2>
<!-- backwards compatibility -->
<a id="schemareq_paginator"></a>
<a id="schema_req_paginator"></a>
<a id="tocSreq_paginator"></a>
<a id="tocsreq_paginator"></a>

```json
"{\"page\": 1, \"size\": 10}"

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|none|

<h2 id="tocS_req_question">req_question</h2>
<!-- backwards compatibility -->
<a id="schemareq_question"></a>
<a id="schema_req_question"></a>
<a id="tocSreq_question"></a>
<a id="tocsreq_question"></a>

```json
{
  "content": "What is the answer for life?",
  "type": "MCQ",
  "answers": [
    {
      "content": "That is a mystery",
      "is_correct": true
    }
  ],
  "tags": [
    1,
    2,
    3
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|type|string|false|none|none|
|answers|[[req_answer](#schemareq_answer)]|false|none|none|
|tags|[req_tags](#schemareq_tags)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MCQ|
|type|STR|

<h2 id="tocS_req_answer">req_answer</h2>
<!-- backwards compatibility -->
<a id="schemareq_answer"></a>
<a id="schema_req_answer"></a>
<a id="tocSreq_answer"></a>
<a id="tocsreq_answer"></a>

```json
{
  "content": "That is a mystery",
  "is_correct": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|is_correct|boolean|false|none|none|

<h2 id="tocS_req_tags">req_tags</h2>
<!-- backwards compatibility -->
<a id="schemareq_tags"></a>
<a id="schema_req_tags"></a>
<a id="tocSreq_tags"></a>
<a id="tocsreq_tags"></a>

```json
[
  1,
  2,
  3
]

```

### Properties

*None*

<h2 id="tocS_res_identifier">res_identifier</h2>
<!-- backwards compatibility -->
<a id="schemares_identifier"></a>
<a id="schema_res_identifier"></a>
<a id="tocSres_identifier"></a>
<a id="tocsres_identifier"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_res_question">res_question</h2>
<!-- backwards compatibility -->
<a id="schemares_question"></a>
<a id="schema_res_question"></a>
<a id="tocSres_question"></a>
<a id="tocsres_question"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "content": "string",
  "type": "MCQ",
  "answers": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "content": "string"
    }
  ],
  "tags": [
    {
      "id": 1,
      "name": "exam:5-scholarship",
      "desc": "Grade 5 Scholarship"
    },
    {
      "id": 2,
      "name": "exam:ordinary-level",
      "desc": "GCE Ordinary Level"
    },
    {
      "id": 3,
      "name": "exam:advanced-level",
      "desc": "GCE Advanced Level"
    },
    {
      "id": 4,
      "name": "year:2021",
      "desc": "2021"
    },
    {
      "id": 5,
      "name": "subject:math",
      "desc": "Mathematics"
    },
    {
      "id": 6,
      "name": "paper:1",
      "desc": "Paper I"
    },
    {
      "id": 7,
      "name": "q:1",
      "desc": "q:1"
    },
    {
      "id": 8,
      "name": "lang:si-lk",
      "desc": "Sinhala"
    },
    {
      "id": 9,
      "name": "lang:ta-lk",
      "desc": "Tamil"
    },
    {
      "id": 10,
      "name": "lang:en-gb",
      "desc": "English"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|content|string|false|none|none|
|type|string|false|none|none|
|answers|[[res_answer](#schemares_answer)]|false|none|none|
|tags|[res_tags](#schemares_tags)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MCQ|
|type|STR|

<h2 id="tocS_res_question_trimmed">res_question_trimmed</h2>
<!-- backwards compatibility -->
<a id="schemares_question_trimmed"></a>
<a id="schema_res_question_trimmed"></a>
<a id="tocSres_question_trimmed"></a>
<a id="tocsres_question_trimmed"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "content": "string",
  "type": "MCQ",
  "answers": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "content": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|content|string|false|none|none|
|type|string|false|none|none|
|answers|[[res_answer](#schemares_answer)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MCQ|
|type|STR|

<h2 id="tocS_res_answer">res_answer</h2>
<!-- backwards compatibility -->
<a id="schemares_answer"></a>
<a id="schema_res_answer"></a>
<a id="tocSres_answer"></a>
<a id="tocsres_answer"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "content": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|content|string|false|none|none|

<h2 id="tocS_res_tags">res_tags</h2>
<!-- backwards compatibility -->
<a id="schemares_tags"></a>
<a id="schema_res_tags"></a>
<a id="tocSres_tags"></a>
<a id="tocsres_tags"></a>

```json
[
  {
    "id": 1,
    "name": "exam:5-scholarship",
    "desc": "Grade 5 Scholarship"
  },
  {
    "id": 2,
    "name": "exam:ordinary-level",
    "desc": "GCE Ordinary Level"
  },
  {
    "id": 3,
    "name": "exam:advanced-level",
    "desc": "GCE Advanced Level"
  },
  {
    "id": 4,
    "name": "year:2021",
    "desc": "2021"
  },
  {
    "id": 5,
    "name": "subject:math",
    "desc": "Mathematics"
  },
  {
    "id": 6,
    "name": "paper:1",
    "desc": "Paper I"
  },
  {
    "id": 7,
    "name": "q:1",
    "desc": "q:1"
  },
  {
    "id": 8,
    "name": "lang:si-lk",
    "desc": "Sinhala"
  },
  {
    "id": 9,
    "name": "lang:ta-lk",
    "desc": "Tamil"
  },
  {
    "id": 10,
    "name": "lang:en-gb",
    "desc": "English"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|
|desc|string|false|none|none|

<h2 id="tocS_res_paginator">res_paginator</h2>
<!-- backwards compatibility -->
<a id="schemares_paginator"></a>
<a id="schema_res_paginator"></a>
<a id="tocSres_paginator"></a>
<a id="tocsres_paginator"></a>

```json
{
  "page": 1,
  "size": 10,
  "count": 100
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|none|
|size|integer|false|none|none|
|count|integer|false|none|none|

<h2 id="tocS_generic_error">generic_error</h2>
<!-- backwards compatibility -->
<a id="schemageneric_error"></a>
<a id="schema_generic_error"></a>
<a id="tocSgeneric_error"></a>
<a id="tocsgeneric_error"></a>

```json
{
  "errors": {
    "code": "string",
    "message": "string",
    "trace": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|none|
|» code|string|true|none|none|
|» message|string|true|none|none|
|» trace|string|false|none|none|

<h2 id="tocS_validation_error">validation_error</h2>
<!-- backwards compatibility -->
<a id="schemavalidation_error"></a>
<a id="schema_validation_error"></a>
<a id="tocSvalidation_error"></a>
<a id="tocsvalidation_error"></a>

```json
{
  "errors": {
    "field": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|true|none|none|
|» field|[string]|false|none|none|

