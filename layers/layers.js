ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([857474.472060, 6248257.701542, 892277.656793, 6276052.898057]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ortho20cm_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/annexes/ressources/wms-r/ortho.xml",
                              attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho 20 cm',
                            popuplayertitle: 'Ortho 20 cm',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_2, 0]);

    var projection_OrthoexpressRVB2026_3 = ol.proj.get('EPSG:3857');
    var projectionExtent_OrthoexpressRVB2026_3 = projection_OrthoexpressRVB2026_3.getExtent();
    var size_OrthoexpressRVB2026_3 = ol.extent.getWidth(projectionExtent_OrthoexpressRVB2026_3) / 256;
    var resolutions_OrthoexpressRVB2026_3 = new Array(14);
    var matrixIds_OrthoexpressRVB2026_3 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_OrthoexpressRVB2026_3[z] = size_OrthoexpressRVB2026_3 / Math.pow(2, z);
        matrixIds_OrthoexpressRVB2026_3[z] = z;
    }
    var lyr_OrthoexpressRVB2026_3 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities",
                                attributions: ' ',
                                "layer": "ORTHOIMAGERY.ORTHOPHOTOS.RVB-EXPRESS.2026",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_OrthoexpressRVB2026_3,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_OrthoexpressRVB2026_3),
                resolutions: resolutions_OrthoexpressRVB2026_3,
                matrixIds: matrixIds_OrthoexpressRVB2026_3
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortho-express RVB 2026',
                            opacity: 1.0,
                            
                            
                          });
var format_communescommune_4 = new ol.format.GeoJSON();
var features_communescommune_4 = format_communescommune_4.readFeatures(json_communescommune_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_communescommune_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communescommune_4.addFeatures(features_communescommune_4);
var lyr_communescommune_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communescommune_4, 
                style: style_communescommune_4,
                popuplayertitle: 'communes — commune',
                interactive: false,
                title: '<img src="styles/legend/communescommune_4.png" /> communes — commune'
            });
var format_Portsexistants_5 = new ol.format.GeoJSON();
var features_Portsexistants_5 = format_Portsexistants_5.readFeatures(json_Portsexistants_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Portsexistants_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Portsexistants_5.addFeatures(features_Portsexistants_5);
var lyr_Portsexistants_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Portsexistants_5, 
                style: style_Portsexistants_5,
                popuplayertitle: 'Ports existants',
                interactive: true,
                title: '<img src="styles/legend/Portsexistants_5.png" /> Ports existants'
            });
var format_Embarcadrespotentiels_6 = new ol.format.GeoJSON();
var features_Embarcadrespotentiels_6 = format_Embarcadrespotentiels_6.readFeatures(json_Embarcadrespotentiels_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Embarcadrespotentiels_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embarcadrespotentiels_6.addFeatures(features_Embarcadrespotentiels_6);
var lyr_Embarcadrespotentiels_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embarcadrespotentiels_6, 
                style: style_Embarcadrespotentiels_6,
                popuplayertitle: 'Embarcadères potentiels',
                interactive: true,
    title: 'Embarcadères potentiels<br />\
    <img src="styles/legend/Embarcadrespotentiels_6_0.png" /> Bonne emprise foncière mais éloignement à plus de 400 m des commodités<br />\
    <img src="styles/legend/Embarcadrespotentiels_6_1.png" /> Emprise foncière supérieure à 5000 m² et bonne connexion aux commodités les plus proches<br />\
    <img src="styles/legend/Embarcadrespotentiels_6_2.png" /> <br />' });
var group_Ports = new ol.layer.Group({
                                layers: [lyr_Portsexistants_5,lyr_Embarcadrespotentiels_6,],
                                fold: 'open',
                                title: 'Ports'});
var group_Fonddeplan = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_OpenTopoMap_1,lyr_Ortho20cm_2,lyr_OrthoexpressRVB2026_3,],
                                fold: 'open',
                                title: 'Fond de plan'});

lyr_OSMStandard_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_Ortho20cm_2.setVisible(true);lyr_OrthoexpressRVB2026_3.setVisible(true);lyr_communescommune_4.setVisible(true);lyr_Portsexistants_5.setVisible(true);lyr_Embarcadrespotentiels_6.setVisible(true);
var layersList = [group_Fonddeplan,lyr_communescommune_4,group_Ports];
lyr_communescommune_4.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'code_insee_du_canton': 'code_insee_du_canton', 'code_insee_de_l_arrondissement': 'code_insee_de_l_arrondissement', 'code_insee_de_la_collectivite_terr': 'code_insee_de_la_collectivite_terr', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_region': 'code_insee_de_la_region', 'population': 'population', 'superficie_cadastrale': 'superficie_cadastrale', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'code_postal': 'code_postal', 'nom_officiel': 'nom_officiel', 'chef_lieu_d_arrondissement': 'chef_lieu_d_arrondissement', 'chef_lieu_de_collectivite_terr': 'chef_lieu_de_collectivite_terr', 'chef_lieu_de_departement': 'chef_lieu_de_departement', 'chef_lieu_de_region': 'chef_lieu_de_region', 'capitale_d_etat': 'capitale_d_etat', 'date_du_recensement': 'date_du_recensement', 'organisme_recenseur': 'organisme_recenseur', 'code_siren': 'code_siren', 'codes_siren_des_epci': 'codes_siren_des_epci', 'lien_vers_chef_lieu': 'lien_vers_chef_lieu', 'liens_vers_autorite_administrative': 'liens_vers_autorite_administrative', });
lyr_Portsexistants_5.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', });
lyr_Embarcadrespotentiels_6.set('fieldAliases', {'fid': 'fid', 'hub_dist_route': 'Distance à la route', 'hub_dist_parking': 'Distance au parking', 'surf': 'Surfgace disponible', 'id_source': 'id_source', 'potentiel': 'potentiel', });
lyr_communescommune_4.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_du_canton': 'TextEdit', 'code_insee_de_l_arrondissement': 'TextEdit', 'code_insee_de_la_collectivite_terr': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'population': 'Range', 'superficie_cadastrale': 'Range', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'code_postal': 'TextEdit', 'nom_officiel': 'TextEdit', 'chef_lieu_d_arrondissement': 'CheckBox', 'chef_lieu_de_collectivite_terr': 'CheckBox', 'chef_lieu_de_departement': 'CheckBox', 'chef_lieu_de_region': 'CheckBox', 'capitale_d_etat': 'CheckBox', 'date_du_recensement': 'DateTime', 'organisme_recenseur': 'TextEdit', 'code_siren': 'TextEdit', 'codes_siren_des_epci': 'TextEdit', 'lien_vers_chef_lieu': 'TextEdit', 'liens_vers_autorite_administrative': 'TextEdit', });
lyr_Portsexistants_5.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', });
lyr_Embarcadrespotentiels_6.set('fieldImages', {'fid': 'TextEdit', 'hub_dist_route': 'Range', 'hub_dist_parking': 'Range', 'surf': 'Range', 'id_source': 'Range', 'potentiel': 'TextEdit', });
lyr_communescommune_4.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'code_insee_du_canton': 'no label', 'code_insee_de_l_arrondissement': 'no label', 'code_insee_de_la_collectivite_terr': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_region': 'no label', 'population': 'no label', 'superficie_cadastrale': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'code_postal': 'no label', 'nom_officiel': 'no label', 'chef_lieu_d_arrondissement': 'no label', 'chef_lieu_de_collectivite_terr': 'no label', 'chef_lieu_de_departement': 'no label', 'chef_lieu_de_region': 'no label', 'capitale_d_etat': 'no label', 'date_du_recensement': 'no label', 'organisme_recenseur': 'no label', 'code_siren': 'no label', 'codes_siren_des_epci': 'no label', 'lien_vers_chef_lieu': 'no label', 'liens_vers_autorite_administrative': 'no label', });
lyr_Portsexistants_5.set('fieldLabels', {'fid': 'hidden field', 'nom': 'no label', });
lyr_Embarcadrespotentiels_6.set('fieldLabels', {'fid': 'hidden field', 'hub_dist_route': 'inline label - always visible', 'hub_dist_parking': 'inline label - always visible', 'surf': 'inline label - always visible', 'id_source': 'hidden field', 'potentiel': 'header label - always visible', });
lyr_Embarcadrespotentiels_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});