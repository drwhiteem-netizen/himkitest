var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Химки ГО — Округ',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Химки ГО — Округ'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Районы',
                interactive: true,
    title: 'Районы<br />\
    <img src="styles/legend/_2_0.png" /> Клязьма-Старбеево<br />\
    <img src="styles/legend/_2_1.png" /> Кутузовское<br />\
    <img src="styles/legend/_2_2.png" /> Левый берег<br />\
    <img src="styles/legend/_2_3.png" /> Лунёво<br />\
    <img src="styles/legend/_2_4.png" /> Новогорск<br />\
    <img src="styles/legend/_2_5.png" /> Новые Химки<br />\
    <img src="styles/legend/_2_6.png" /> Планерная<br />\
    <img src="styles/legend/_2_7.png" /> Подрезково<br />\
    <img src="styles/legend/_2_8.png" /> Старые Химки<br />\
    <img src="styles/legend/_2_9.png" /> Сходня<br />\
    <img src="styles/legend/_2_10.png" /> Фирсановка<br />\
    <img src="styles/legend/_2_11.png" /> <br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Дороги местные',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Дороги местные'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Общественные пространства',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Общественные пространства'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Дворовые территории',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Дворовые территории'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'Чат-бот',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Чат-бот'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'Добродел',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> Добродел'
            });

lyr_2gisMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7];
lyr__1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Участки дорог': 'Участки дорог', 'Протяженность дорог, км': 'Протяженность дорог, км', 'Дворовые территории': 'Дворовые территории', 'Общественные пространства': 'Общественные пространства', 'Чат-боты': 'Чат-боты', 'Доброделы': 'Доброделы', });
lyr__3.set('fieldAliases', {'name': 'name', 'ID СКПДИ': 'ID СКПДИ', 'Вид покрытия': 'Вид покрытия', 'Категория': 'Категория', 'Протяженность, км': 'Протяженность, км', });
lyr__4.set('fieldAliases', {'name': 'name', 'skpdi': 'skpdi', 'description': 'description', });
lyr__5.set('fieldAliases', {'name': 'name', 'description': 'description', 'skpdi': 'skpdi', });
lyr__6.set('fieldAliases', {'ID': 'ID', 'Дата': 'Дата', 'Адрес': 'Адрес', 'Категория': 'Категория', 'Комментарий': 'Комментарий', 'Фото': 'Фото', });
lyr__7.set('fieldAliases', {'Номер': 'Номер', 'Срок': 'Срок', 'Адрес': 'Адрес', 'Группа': 'Группа', 'Категория': 'Категория', 'Ссылка': 'Ссылка', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Участки дорог': 'Range', 'Протяженность дорог, км': 'TextEdit', 'Дворовые территории': 'Range', 'Общественные пространства': 'Range', 'Чат-боты': 'Range', 'Доброделы': 'Range', });
lyr__3.set('fieldImages', {'name': 'TextEdit', 'ID СКПДИ': 'TextEdit', 'Вид покрытия': 'TextEdit', 'Категория': 'TextEdit', 'Протяженность, км': 'TextEdit', });
lyr__4.set('fieldImages', {'name': 'TextEdit', 'skpdi': 'TextEdit', 'description': 'TextEdit', });
lyr__5.set('fieldImages', {'name': 'TextEdit', 'description': 'TextEdit', 'skpdi': 'TextEdit', });
lyr__6.set('fieldImages', {'ID': 'Range', 'Дата': 'DateTime', 'Адрес': 'TextEdit', 'Категория': 'TextEdit', 'Комментарий': 'TextEdit', 'Фото': 'TextEdit', });
lyr__7.set('fieldImages', {'Номер': 'Range', 'Срок': 'TextEdit', 'Адрес': 'TextEdit', 'Группа': 'TextEdit', 'Категория': 'TextEdit', 'Ссылка': 'TextEdit', });
lyr__1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__2.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', 'description': 'no label', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Участки дорог': 'inline label - visible with data', 'Протяженность дорог, км': 'inline label - visible with data', 'Дворовые территории': 'inline label - visible with data', 'Общественные пространства': 'inline label - visible with data', 'Чат-боты': 'inline label - visible with data', 'Доброделы': 'inline label - visible with data', });
lyr__3.set('fieldLabels', {'name': 'no label', 'ID СКПДИ': 'no label', 'Вид покрытия': 'no label', 'Категория': 'no label', 'Протяженность, км': 'no label', });
lyr__4.set('fieldLabels', {'name': 'no label', 'skpdi': 'no label', 'description': 'no label', });
lyr__5.set('fieldLabels', {'name': 'no label', 'description': 'no label', 'skpdi': 'no label', });
lyr__6.set('fieldLabels', {'ID': 'no label', 'Дата': 'no label', 'Адрес': 'no label', 'Категория': 'no label', 'Комментарий': 'no label', 'Фото': 'no label', });
lyr__7.set('fieldLabels', {'Номер': 'no label', 'Срок': 'no label', 'Адрес': 'no label', 'Группа': 'no label', 'Категория': 'no label', 'Ссылка': 'no label', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});