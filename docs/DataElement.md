# DataHubApi.DataElement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id of this data element | [optional] 
**releasecode** | **String** | The release this element relates to | [optional] 
**elementcode** | **String** | The full element code | [optional] 
**mimeType** | **String** | The mime type of the data element | [optional] 
**description** | **String** | Some information about this element | [optional] 
**type** | **String** | The underlying data type of this element | [optional] 
**schemes** | **[String]** | The underlying format of the data | [optional] 
**state** | **String** | The state of this element (is it published?) | [optional] 
**storage** | **String** | Where blocks are stored for this element | [optional] 
**content** | **String** | If the type is text, this is the text | [optional] 
**blockId** | **Integer** | If the type is csv, this is the next block when added | [optional] 
**keyField** | **String** | If the type is keyed, this is the key field that represents the unique key | [optional] 
**published** | **Boolean** | Whether this element has been published (by publishing its release) | [optional] 
**displayInfo** | [**DataElementDisplayInfo**](DataElementDisplayInfo.md) |  | [optional] 
**csvInfo** | [**DataElementCsvInfo**](DataElementCsvInfo.md) |  | [optional] 


