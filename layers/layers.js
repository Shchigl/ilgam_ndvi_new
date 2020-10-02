var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ndvi_sentinel_bigger_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi_sentinel_bigger",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi_sentinel_bigger_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3350433.089360, 6475370.385929, 3447912.132856, 6557045.274574]
                            })
                        });
var format_Dneprovskiy_2 = new ol.format.GeoJSON();
var features_Dneprovskiy_2 = format_Dneprovskiy_2.readFeatures(json_Dneprovskiy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dneprovskiy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dneprovskiy_2.addFeatures(features_Dneprovskiy_2);
var lyr_Dneprovskiy_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dneprovskiy_2, 
                style: style_Dneprovskiy_2,
                interactive: false,
                title: '<img src="styles/legend/Dneprovskiy_2.png" /> Dneprovskiy'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ndvi_sentinel_bigger_1.setVisible(true);lyr_Dneprovskiy_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ndvi_sentinel_bigger_1,lyr_Dneprovskiy_2];
lyr_Dneprovskiy_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_level': 'admin_level', 'boundary': 'boundary', 'int_name': 'int_name', 'koatuu': 'koatuu', 'name': 'name', 'name:be-tarask': 'name:be-tarask', 'name:de': 'name:de', 'name:en': 'name:en', 'name:es': 'name:es', 'name:fi': 'name:fi', 'name:fr': 'name:fr', 'name:jp': 'name:jp', 'name:pl': 'name:pl', 'name:pt': 'name:pt', 'name:ru': 'name:ru', 'name:uk': 'name:uk', 'name:vi': 'name:vi', 'name:zh': 'name:zh', 'name:zh-CN': 'name:zh-CN', 'name:zh-HK': 'name:zh-HK', 'name:zh-MO': 'name:zh-MO', 'name:zh-SG': 'name:zh-SG', 'name:zh-TW': 'name:zh-TW', 'place': 'place', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', });
lyr_Dneprovskiy_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'int_name': 'TextEdit', 'koatuu': 'TextEdit', 'name': 'TextEdit', 'name:be-tarask': 'TextEdit', 'name:de': 'TextEdit', 'name:en': 'TextEdit', 'name:es': 'TextEdit', 'name:fi': 'TextEdit', 'name:fr': 'TextEdit', 'name:jp': 'TextEdit', 'name:pl': 'TextEdit', 'name:pt': 'TextEdit', 'name:ru': 'TextEdit', 'name:uk': 'TextEdit', 'name:vi': 'TextEdit', 'name:zh': 'TextEdit', 'name:zh-CN': 'TextEdit', 'name:zh-HK': 'TextEdit', 'name:zh-MO': 'TextEdit', 'name:zh-SG': 'TextEdit', 'name:zh-TW': 'TextEdit', 'place': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Dneprovskiy_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_level': 'no label', 'boundary': 'no label', 'int_name': 'no label', 'koatuu': 'no label', 'name': 'no label', 'name:be-tarask': 'no label', 'name:de': 'no label', 'name:en': 'no label', 'name:es': 'no label', 'name:fi': 'no label', 'name:fr': 'no label', 'name:jp': 'no label', 'name:pl': 'no label', 'name:pt': 'no label', 'name:ru': 'no label', 'name:uk': 'no label', 'name:vi': 'no label', 'name:zh': 'no label', 'name:zh-CN': 'no label', 'name:zh-HK': 'no label', 'name:zh-MO': 'no label', 'name:zh-SG': 'no label', 'name:zh-TW': 'no label', 'place': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', });
lyr_Dneprovskiy_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});