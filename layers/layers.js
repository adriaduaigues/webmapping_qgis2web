ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-559878.626226, 4395745.451057, -546401.932714, 4406338.537293]);
var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var lyr_Orientaciones_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Orientaciones",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Orientaciones_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557275.195156, 4397502.867494, -549526.710916, 4404892.709448]
                            })
                        });
var lyr_Distanciaacanales_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancia a canales",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Distanciaacanales_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557275.195156, 4397502.867494, -549526.710916, 4404892.709448]
                            })
                        });
var lyr_ndicedeShannonH_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Índice de Shannon (H)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndicedeShannonH_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557278.661084, 4397503.864072, -549530.173900, 4404893.709079]
                            })
                        });
var lyr_Densidaddepinsapo_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidad de pinsapo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Densidaddepinsapo_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557275.195156, 4397502.867494, -549526.710916, 4404892.709448]
                            })
                        });
var lyr_Rastervirtual_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Raster virtual",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Rastervirtual_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557278.661084, 4397503.864072, -549530.173900, 4404893.709079]
                            })
                        });
var format_Segmentacin_6 = new ol.format.GeoJSON();
var features_Segmentacin_6 = format_Segmentacin_6.readFeatures(json_Segmentacin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segmentacin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentacin_6.addFeatures(features_Segmentacin_6);
var lyr_Segmentacin_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Segmentacin_6, 
                style: style_Segmentacin_6,
                interactive: false,
                title: '<img src="styles/legend/Segmentacin_6.png" /> Segmentación'
            });

lyr_Ortoimagen_0.setVisible(true);lyr_Orientaciones_1.setVisible(true);lyr_Distanciaacanales_2.setVisible(true);lyr_ndicedeShannonH_3.setVisible(true);lyr_Densidaddepinsapo_4.setVisible(true);lyr_Rastervirtual_5.setVisible(true);lyr_Segmentacin_6.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_Orientaciones_1,lyr_Distanciaacanales_2,lyr_ndicedeShannonH_3,lyr_Densidaddepinsapo_4,lyr_Rastervirtual_5,lyr_Segmentacin_6];
lyr_Segmentacin_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Segmentacin_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Segmentacin_6.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Segmentacin_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});