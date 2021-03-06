# 编辑一个配送区域

#### 接口描述：
- 编辑一个配送区域。

#### 请求 URL：
- `http|https://host/api/v1/delivery_area/method/set.delivery.area.item/`

#### 请求方式：
- GET
- POST

#### 是否授权：
- 需要授权

#### 业务参数：
|参数名|类型|是否必须|范围值|默认值|示例值|描述|
|:----|:---|:---:|:-----|:-----|:-----|-----|
|delivery_area_id |integer |是 |gt:0 | |16 |配送区域编号 |
|delivery_id |integer |否 |gt:0 | |9 |配送方式编号 |
|name |string |否 |max:50 | |江浙沪 |配送区域名称 |
|region |integer |否 |gt[]:0 | |[10,11,12] |所辖区域(区域编号) |
|first_weight_price |number |否 |egt:0 | |8.00 |首重运费 |
|second_weight_price |number |否 |egt:0 | |4.50 |续重运费 |
|first_item_price |number |否 |egt:0 | |0 |首件运费 |
|second_item_price |number |否 |egt:0 | |0 |续件运费 |
|first_volume_price |number |否 |egt:0 | |0 |首体积运费 |
|second_volume_price |number |否 |egt:0 | |0 |续体积运费 |

#### 响应参数：
|参数名|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|status |integer |是 |200 |状态码 |
|message |string |是 |success |消息信息 |
|data |object |是 |[] |返回对象 |

|data|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|delivery_area_id |integer |是 |16 |配送区域编号 |
|name |string |否 |江浙沪 |配送区域名称 |
|region |array |否 |[] |所辖区域数组 |
|first_weight_price |number |否 |8 |首重运费 |
|second_weight_price |number |否 |4.5 |续重运费 |
|first_item_price |number |否 |0 |首件运费 |
|second_item_price |number |否 |0 |续件运费 |
|first_volume_price |number |否 |0 |首体积运费 |
|second_volume_price |number |否 |0 |续体积运费 |

|region|类型|是否返回|示例值|描述|
|:-----|:-----|:---:|:-----|-----|
|name |string |否 |上海 |区域名称 |
|region_id |integer |否 |10 |区域编号 |

#### 响应示例：
```json
{
  "status": 200,
  "message": "success",
  "data": {
    "delivery_area_id": 16,
    "region": [
      {
        "name": "上海",
        "region_id": 10
      },
      {
        "name": "江苏省",
        "region_id": 11
      },
      {
        "name": "浙江省",
        "region_id": 12
      }
    ],
    "name": "江浙沪",
    "first_weight_price": 8,
    "second_weight_price": 4.5,
    "first_item_price": 0,
    "second_item_price": 0,
    "first_volume_price": 0,
    "second_volume_price": 0
  }
}
```

#### 备注:
1. 业务参数`是否必须`一栏中被标注为`否`时，可不填写此参数，表示该接口可单独修改某个字段。