---
title: SchoolAPI v0.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - ruby: Ruby
  - python: Python
  - java: Java
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2


---


<h1 id="SchoolAPI">SchoolAPI v0.0.0</h1>


> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


REST API for managing school details. Education project, Serendipity platform.


Base URLs:


* <a href="http://localhost:3000/api">http://localhost:3000/api</a>


<h1 id="SchoolAPI-information">information</h1>


## Sends information about the API


`GET /`


Provides information about the API like `name`, `version`, `purpose`.


> Example responses


```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "enum": [
        "SchoolAPI"
      ]
    },
    "version": {
      "type": "string",
      "enum": [
        "v0.0.0"
      ]
    },
    "purpose": {
      "type": "string",
      "enum": [
        "REST API for managing school details. Education project, Serendipity platform.\n"
      ]
    }
  }
}
```


<h3 id="Sends information about the API-responses">Responses</h3>


|Status|Description|Schema|
|---|---|---|
|200|API Details|Inline|


<h3 id="Sends information about the API-responseschema">Response Schema</h3>


Status Code **200**


|Name|Type|Required|Description|
|---|---|---|---|
|» name|string|false|No description|
|» version|string|false|No description|
|» purpose|string|false|No description|


#### Enumerated Values


|Property|Value|
|---|---|
|name|SchoolAPI|
|version|v0.0.0|
|purpose|REST API for managing school details. Education project, Serendipity platform.
|


<h1 id="SchoolAPI-School">School</h1>


## Return a collection of schools


`GET /school`


<h3 id="Return a collection of schools-parameters">Parameters</h3>


|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|filters|query|array[object]|false|Additional filters JSON in string serialized format|
|paginator|query|[paginator](#schemapaginator)|false|Paginator JSON in string serialized format|


> Example responses


```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "address": {
        "type": "string"
      },
      "location": {
        "type": "object",
        "properties": {
          "lon": {
            "type": "number"
          },
          "lat": {
            "type": "number"
          }
        }
      },
      "telephone": {
        "type": "integer"
      },
      "crest": {
        "type": "string"
      },
      "flag": {
        "type": "string"
      },
      "census_number": {
        "type": "string"
      },
      "division": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "type": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "grade_span": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "composition": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "is_active": {
        "type": "boolean"
      }
    }
  }
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```


<h3 id="Return a collection of schools-responses">Responses</h3>


|Status|Description|Schema|
|---|---|---|
|200|Schools collection|Inline|
|400|Domain Error|generic_error|
|500|Service Error|generic_error|


<h3 id="Return a collection of schools-responseschema">Response Schema</h3>


Status Code **200**


|Name|Type|Required|Description|
|---|---|---|---|
|*anonymous*|[[res_school](#schemares_school)]|false|No description|
|» name|string|false|No description|
|» address|string|false|No description|
|» location|object|false|No description|
|»» lon|number|false|No description|
|»» lat|number|false|No description|
|» telephone|integer|false|No description|
|» crest|string|false|No description|
|» flag|string|false|No description|
|» census_number|string|false|No description|
|» division|object|false|No description|
|»» id|integer|false|No description|
|»» name|string|false|No description|
|» type|object|false|No description|
|»» id|integer|false|No description|
|»» name|string|false|No description|
|» grade_span|object|false|No description|
|»» id|integer|false|No description|
|»» name|string|false|No description|
|» composition|object|false|No description|
|»» id|integer|false|No description|
|»» name|string|false|No description|
|» category|object|false|No description|
|»» id|integer|false|No description|
|»» name|string|false|No description|
|» is_active|boolean|false|No description|


## Create a new school


`POST /school`


Create new school from provided data.


> Body parameter


```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "address": {
      "type": "string"
    },
    "location": {
      "type": "object",
      "properties": {
        "lon": {
          "type": "number"
        },
        "lat": {
          "type": "number"
        }
      }
    },
    "telephone": {
      "type": "integer"
    },
    "crest": {
      "type": "string"
    },
    "flag": {
      "type": "string"
    },
    "census_number": {
      "type": "string"
    },
    "division_id": {
      "type": "integer"
    },
    "type_id": {
      "type": "integer"
    },
    "grade_span_id": {
      "type": "integer"
    },
    "composition_id": {
      "type": "integer"
    },
    "category_id": {
      "type": "integer"
    },
    "is_active": {
      "type": "boolean"
    }
  }
}
```


<h3 id="Create a new school-parameters">Parameters</h3>


|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[req_school](#schemareq_school)|true|No description|


> Example responses


```json
{
  "description": "Identifier",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "minimum": 1,
      "maximum": 99999
    }
  }
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "field": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    }
  },
  "required": [
    "errors"
  ]
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```


<h3 id="Create a new school-responses">Responses</h3>


|Status|Description|Schema|
|---|---|---|
|201|School created|identifier|
|400|Domain Error|generic_error|
|422|Validation Error|validation_error|
|500|Service Error|generic_error|


## Return a single school by id


`GET /school/{id}`


<h3 id="Return a single school by id-parameters">Parameters</h3>


|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Identifier|


> Example responses


```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "address": {
      "type": "string"
    },
    "location": {
      "type": "object",
      "properties": {
        "lon": {
          "type": "number"
        },
        "lat": {
          "type": "number"
        }
      }
    },
    "telephone": {
      "type": "integer"
    },
    "crest": {
      "type": "string"
    },
    "flag": {
      "type": "string"
    },
    "census_number": {
      "type": "string"
    },
    "division": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "type": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "grade_span": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "composition": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "is_active": {
      "type": "boolean"
    }
  }
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```


<h3 id="Return a single school by id-responses">Responses</h3>


|Status|Description|Schema|
|---|---|---|
|200|School|res_school|
|400|Domain Error|generic_error|
|500|Service Error|generic_error|


## Update a school


`PUT /school/{id}`


> Body parameter


```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "address": {
      "type": "string"
    },
    "location": {
      "type": "object",
      "properties": {
        "lon": {
          "type": "number"
        },
        "lat": {
          "type": "number"
        }
      }
    },
    "telephone": {
      "type": "integer"
    },
    "crest": {
      "type": "string"
    },
    "flag": {
      "type": "string"
    },
    "census_number": {
      "type": "string"
    },
    "division_id": {
      "type": "integer"
    },
    "type_id": {
      "type": "integer"
    },
    "grade_span_id": {
      "type": "integer"
    },
    "composition_id": {
      "type": "integer"
    },
    "category_id": {
      "type": "integer"
    },
    "is_active": {
      "type": "boolean"
    }
  }
}
```


<h3 id="Update a school-parameters">Parameters</h3>


|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Identifier|
|body|body|[req_school](#schemareq_school)|true|No description|


> Example responses


```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "field": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    }
  },
  "required": [
    "errors"
  ]
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```


<h3 id="Update a school-responses">Responses</h3>


|Status|Description|Schema|
|---|---|---|
|204|School updated|None|
|400|Domain Error|generic_error|
|422|Validation Error|validation_error|
|500|Service Error|generic_error|


## Delete a school


`DELETE /school/{id}`


<h3 id="Delete a school-parameters">Parameters</h3>


|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Identifier|


> Example responses


```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```
```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```


<h3 id="Delete a school-responses">Responses</h3>


|Status|Description|Schema|
|---|---|---|
|204|School deleted|None|
|400|Domain Error|generic_error|
|500|Service Error|generic_error|


# Schemas


<h2 id="tocSidentifier">identifier</h2>


<a id="schemaidentifier"></a>


```json
{
  "description": "Identifier",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "minimum": 1,
      "maximum": 99999
    }
  }
}
```


### Properties


|Name|Type|Required|Description|
|---|---|---|---|
|id|integer|false|No description|


<h2 id="tocSfilter">filter</h2>


<a id="schemafilter"></a>


```json
{
  "type": "object",
  "properties": {
    "field": {
      "type": "string"
    },
    "value": {
      "type": "string"
    }
  }
}
```


### Properties


|Name|Type|Required|Description|
|---|---|---|---|
|field|string|false|No description|
|value|string|false|No description|


<h2 id="tocSpaginator">paginator</h2>


<a id="schemapaginator"></a>


```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1,
      "default": 1
    },
    "size": {
      "type": "integer",
      "default": 10
    }
  }
}
```


### Properties


|Name|Type|Required|Description|
|---|---|---|---|
|page|integer|false|No description|
|size|integer|false|No description|


<h2 id="tocSreq_school">req_school</h2>


<a id="schemareq_school"></a>


```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "address": {
      "type": "string"
    },
    "location": {
      "type": "object",
      "properties": {
        "lon": {
          "type": "number"
        },
        "lat": {
          "type": "number"
        }
      }
    },
    "telephone": {
      "type": "integer"
    },
    "crest": {
      "type": "string"
    },
    "flag": {
      "type": "string"
    },
    "census_number": {
      "type": "string"
    },
    "division_id": {
      "type": "integer"
    },
    "type_id": {
      "type": "integer"
    },
    "grade_span_id": {
      "type": "integer"
    },
    "composition_id": {
      "type": "integer"
    },
    "category_id": {
      "type": "integer"
    },
    "is_active": {
      "type": "boolean"
    }
  }
}
```


### Properties


|Name|Type|Required|Description|
|---|---|---|---|
|name|string|false|No description|
|address|string|false|No description|
|location|object|false|No description|
|» lon|number|false|No description|
|» lat|number|false|No description|
|telephone|integer|false|No description|
|crest|string|false|No description|
|flag|string|false|No description|
|census_number|string|false|No description|
|division_id|integer|false|No description|
|type_id|integer|false|No description|
|grade_span_id|integer|false|No description|
|composition_id|integer|false|No description|
|category_id|integer|false|No description|
|is_active|boolean|false|No description|


<h2 id="tocSres_school">res_school</h2>


<a id="schemares_school"></a>


```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "address": {
      "type": "string"
    },
    "location": {
      "type": "object",
      "properties": {
        "lon": {
          "type": "number"
        },
        "lat": {
          "type": "number"
        }
      }
    },
    "telephone": {
      "type": "integer"
    },
    "crest": {
      "type": "string"
    },
    "flag": {
      "type": "string"
    },
    "census_number": {
      "type": "string"
    },
    "division": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "type": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "grade_span": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "composition": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "is_active": {
      "type": "boolean"
    }
  }
}
```


### Properties


|Name|Type|Required|Description|
|---|---|---|---|
|name|string|false|No description|
|address|string|false|No description|
|location|object|false|No description|
|» lon|number|false|No description|
|» lat|number|false|No description|
|telephone|integer|false|No description|
|crest|string|false|No description|
|flag|string|false|No description|
|census_number|string|false|No description|
|division|object|false|No description|
|» id|integer|false|No description|
|» name|string|false|No description|
|type|object|false|No description|
|» id|integer|false|No description|
|» name|string|false|No description|
|grade_span|object|false|No description|
|» id|integer|false|No description|
|» name|string|false|No description|
|composition|object|false|No description|
|» id|integer|false|No description|
|» name|string|false|No description|
|category|object|false|No description|
|» id|integer|false|No description|
|» name|string|false|No description|
|is_active|boolean|false|No description|


<h2 id="tocSgeneric_error">generic_error</h2>


<a id="schemageneric_error"></a>


```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "trace": {
          "type": "string"
        }
      },
      "required": [
        "code",
        "message"
      ]
    }
  }
}
```


### Properties


|Name|Type|Required|Description|
|---|---|---|---|
|errors|object|false|No description|
|» code|string|true|No description|
|» message|string|true|No description|
|» trace|string|false|No description|


<h2 id="tocSvalidation_error">validation_error</h2>


<a id="schemavalidation_error"></a>


```json
{
  "type": "object",
  "properties": {
    "errors": {
      "type": "object",
      "properties": {
        "field": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    }
  },
  "required": [
    "errors"
  ]
}
```


### Properties


|Name|Type|Required|Description|
|---|---|---|---|
|errors|object|true|No description|
|» field|[string]|false|No description|


