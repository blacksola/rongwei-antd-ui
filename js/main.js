(function () {
    "use strict";

    var app = angular.module('testPage', ['ngMaterial', 'dataxUtils', 'dataxUI']);

    app.controller('testPageController', function ($scope, dxHttp, $mdDialog, $timeout, $compile, $http, $interval, $window, $document) {
        $scope.title = '标题'
        $scope.vegetables = [{
            'name': 'Corn'
        }, {
            'name': 'Onions'
        }, {
            'name': 'Kale'
        }, {
            'name': 'Arugula'
        }, {
            'name': 'Peas'
        }, {
            'name': 'Zucchini'
        }];
        $scope.searchTerm;
        $scope.clearSearchTerm = function () {
            $scope.searchTerm = '';
        };

        $scope.fullMenu=true
        $scope.switchMenu = function () {
            var menuWidth = '50px'
            if ($scope.fullMenu) {
                getByClass('datax-sidebar').addClass('datax-sidebar-mini')
            } else {
                getByClass('datax-sidebar').removeClass('datax-sidebar-mini')
                menuWidth = '195px'
            }
            getByClass('datax-logo').css('width', menuWidth)
            getByClass('datax-header-nav').css('margin-left', menuWidth)
            getByClass('datax-sidebar').css('width', menuWidth)
            
            getByClass('datax-wrapper-content').css('margin-left', menuWidth)
            
            $scope.fullMenu = !$scope.fullMenu
        }
        $scope.switchMenu()

        $scope.dxAlertMsg = function () {
            dxAlertMsg()
        }

        $scope.changeSelect = function (value) {
            console.log(value)
            console.log('$scope.selectedVegetables', $scope.selectedVegetables)
            console.log('$scope.selectedVegetables2', $scope.selectedVegetables2)
        }
        $scope.dateModel = ''
        $scope.test1Method = function () {
            console.log('test1Method')
            $scope.selectedVegetables = 'Corn'
        }
        $scope.dxSelectValue = [0, 5]
        $scope.users = [1, 2, 4, 5, 7, 8, 9, 'sad', 'asd']
        $scope.isCheck = false
        $scope.checkList = [{
            'name': 'zhangsan',
            'code': '0',
            'dept': '人事'
        }, {
            'name': 'zhangsan1',
            'code': '1',
            'dept': '人事'
        }, {
            'name': 'zhangsan2',
            'code': '2',
            'dept': '财务'
        }, {
            'name': 'zhangsan3',
            'code': '3',
            'dept': '人事'
        }, {
            'name': 'zhangsan4',
            'code': '4',
            'dept': '财务'
        }, {
            'name': 'zhangsan5',
            'code': '5',
            'dept': '秘书'
        }, {
            'name': 'zhangsan6',
            'code': '6',
            'dept': '销售'
        }, {
            'name': 'zhangsan7',
            'code': '7',
            'dept': '销售'
        }, {
            'name': 'zhangsan8',
            'code': '8',
            'dept': '销售'
        }, {
            'name': 'zhangsan9',
            'code': '9',
            'dept': '销售'
        }, ]
        console.log(_.groupBy($scope.checkList, 'dept'))
        $scope.radioModel = 2333
        $scope.checkResultList = angular.copy($scope.checkList)
        $scope.test2Method = function () {
            console.log('$scope.selectedVegetables', $scope.selectedVegetables)
        }

        $scope.changeTransfer = function (obj) {
            console.log('changeTransfer', obj)
        }

        // region 测试方法

        $scope.columns = [{
                title: 'Full Name',
                width: 100,
                dataIndex: 'name',
                key: 'name',
                fixed: 'left',
            },
            {
                title: 'Age',
                width: 100,
                dataIndex: 'age',
                key: 'age',
                fixed: 'left',
            },
            {
                title: 'Column 1',
                dataIndex: 'address',
                key: '1',
                width: 150,
            },
            {
                title: 'Column 2',
                dataIndex: 'address',
                key: '2',
                width: 150,
            },
            {
                title: 'Column 3',
                dataIndex: 'address',
                key: '3',
                width: 150,
            },
            {
                title: 'Column 4',
                dataIndex: 'address',
                key: '4',
                width: 150,
            },
            {
                title: 'Column 5',
                dataIndex: 'address',
                key: '5',
                width: 150,
            },
            {
                title: 'Column 6',
                dataIndex: 'address',
                key: '6',
                width: 150,
            },
            {
                title: 'Column 7',
                dataIndex: 'address',
                key: '7',
                width: 150,
            },
            {
                title: 'Column 8',
                dataIndex: 'address',
                key: '8'
            }
        ];

        $scope.data = [];
        for (let i = 0; i < 100; i++) {
            $scope.data.push({
                name: `Edrward ${i}`,
                age: 32,
                address: `London Park no. ${i}`,
                address: `London Park no. ${i}`,
                address: `London Park no. ${i}`,
                address: `London Park no. ${i}`,
                address: `London Park no. ${i}`,
                address: `London Park no. ${i}`,
                address: `London Park no. ${i}`,
                address: `London Park no. ${i}`,
            });
        }

        /* #region   */
        $scope.testGetMethod = function (ev) {
            dxHttp.getData("/api/test/testGetMethod?parameter1=canshu1", $mdDialog).then(function (rs) {
                if (rs.data.status == 'success') {
                    console.log(rs.data.data)
                }
            })
        }

        $scope.testPostMethod = function (ev) {
            dxHttp.postData("/api/test/testPostMethod", {
                parameter1: 'canshu1',
                parameter2: 'canshu2'
            }, $mdDialog).then(function (rs) {
                if (rs.data.status == 'success') {
                    console.log(rs.data.data)
                }
            })
        }

        $scope.showDialog = function () {
            $mdDialog.show({
                contentElement: '#myDialog',
                clickOutsideToClose: true
            });
        }

        /* #endregion */
        // #endregion 

        $timeout(function () {
            // new PerfectScrollbar('.app-main-content', {
            //     'suppressScrollX': true
            // })
        })

    })

    document.getElementById("dataxSidebar").setAttribute("ng-app","dataxSidebarApp");
    document.getElementById("dataxSidebar").setAttribute("ng-controller","dataxSidebarController");

    var app = angular.module('dataxSidebarApp', ['dataxUtils', 'dataxUI']);

    app.controller('dataxSidebarController', function ($scope, $element, $timeout, $rootScope, $window, $compile, $http, dxHttp, dom) {
        $scope.menuList = [{
            "id": "1",
            "name": "数据管理",
            "key": "datacontroller",
            "url": "/",
            "parent_key": null,
            "permission_name": "datacontroller",
            "icon": "fa-object-ungroup",
            "options": null,
            "is_active": false,
            "child": [{
                "id": "57",
                "name": "上传数据管理",
                "key": "uploadfilemanage",
                "url": "/dashboard/uploadFileManage#list",
                "parent_key": "datacontroller",
                "permission_name": "datacontroller,uploadfilemanage",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "4",
                "name": "数据接入",
                "key": "datainsert",
                "url": "/dashboard/dataIndex#add/",
                "parent_key": "datacontroller",
                "permission_name": "datacontroller,dataInsert",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "5",
                "name": "元数据管理",
                "key": "datalist",
                "url": "/dashboard/dataIndex#list",
                "parent_key": "datacontroller",
                "permission_name": "datacontroller,datalist",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }]
        }, {
            "id": "6",
            "name": "数据清洗",
            "key": "dataclean",
            "url": "/",
            "parent_key": null,
            "permission_name": "dataclean",
            "icon": "fa-filter",
            "options": null,
            "is_active": false,
            "child": [{
                "id": "7",
                "name": "清洗脚本设计",
                "key": "datacleanscript",
                "url": "/",
                "parent_key": "dataclean",
                "permission_name": "dataclean,datacleanscript",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "8",
                "name": "清洗作业调度",
                "key": "datacleandispatch",
                "url": "/",
                "parent_key": "dataclean",
                "permission_name": "dataclean,datacleandispatch",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "9",
                "name": "数据归一集成",
                "key": "datacleanintegrate",
                "url": "/",
                "parent_key": "dataclean",
                "permission_name": "dataclean,datacleanintegrate",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }]
        }, {
            "id": "10",
            "name": "数据分析",
            "key": "dataanalysis",
            "url": "/",
            "parent_key": null,
            "permission_name": "dataanalysis",
            "icon": "fa-line-chart",
            "options": null,
            "is_active": false,
            "child": [{
                "id": "44",
                "name": "调度设置",
                "key": "dataanalysisdispatch",
                "url": "/dashboard/olapdispatch",
                "parent_key": "dataanalysis",
                "permission_name": "dataanalysis,dataanalysisdispatch",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "13",
                "name": "业务规则管理",
                "key": "dataanalysisrule",
                "url": "/dashboard/monitordata",
                "parent_key": "dataanalysis",
                "permission_name": "dataanalysis,dataanalysiskpi",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "12",
                "name": "KPI指标管理",
                "key": "dataanalysiskpi",
                "url": "/dashboard/kpi",
                "parent_key": "dataanalysis",
                "permission_name": "dataanalysis,dataanalysiskpi",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "11",
                "name": "OLAP分析",
                "key": "dataanalysisolap",
                "url": "/dashboard/olapanalysis",
                "parent_key": "dataanalysis",
                "permission_name": "dataanalysis,dataanalysisolap",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "50",
                "name": "olap扩展",
                "key": "olapext",
                "url": "/dashboard/olapext",
                "parent_key": "dataanalysis",
                "permission_name": "system,setting",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "48",
                "name": "OLAP数据管理",
                "key": "dataedit",
                "url": "/dashboard/dataedit",
                "parent_key": "dataanalysis",
                "permission_name": "system,module",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "58",
                "name": "调度监控日志",
                "key": "showdispatch",
                "url": "/dashboard/showDispatch",
                "parent_key": "dataanalysis",
                "permission_name": "dataanalysis,showdispatch",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }]
        }, {
            "id": "14",
            "name": "数据智能",
            "key": "dataai",
            "url": "/",
            "parent_key": null,
            "permission_name": "dataai",
            "icon": "fa-tasks",
            "options": null,
            "is_active": false,
            "child": [{
                "id": "21",
                "name": "分类预测",
                "key": "dataaicatforecast",
                "url": "/",
                "parent_key": "dataai",
                "permission_name": "dataai,dataaicatforecast",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "18",
                "name": "统计分析",
                "key": "dataaianalysis",
                "url": "/",
                "parent_key": "dataai",
                "permission_name": "dataai,dataaianalysis",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "23",
                "name": "异常检测",
                "key": "dataaiabnormalforecast",
                "url": "/",
                "parent_key": "dataai",
                "permission_name": "dataai,dataaiabnormalforecast",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "22",
                "name": "回归预测",
                "key": "dataaireturnforecast",
                "url": "/",
                "parent_key": "dataai",
                "permission_name": "dataai,dataaireturnforecast",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }]
        }, {
            "id": "24",
            "name": "数据可视化",
            "key": "datavisual",
            "url": "/",
            "parent_key": null,
            "permission_name": "datavisual",
            "icon": "fa-bar-chart",
            "options": null,
            "is_active": false,
            "child": [{
                "id": "3",
                "name": "表格管理",
                "key": "datatables",
                "url": "/dashboard/datatables",
                "parent_key": "datavisual",
                "permission_name": "datavisual,datatables",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "27",
                "name": "组件设计",
                "key": "widget",
                "url": "/dashboard/chartdesign",
                "parent_key": "datavisual",
                "permission_name": "datavisual,widget",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "29",
                "name": "组件管理",
                "key": "widgetlist",
                "url": "/dashboard/chartlist",
                "parent_key": "datavisual",
                "permission_name": "datavisual,widgetlist",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "30",
                "name": "场景设计",
                "key": "report",
                "url": "/dashboard/boarddesign",
                "parent_key": "datavisual",
                "permission_name": "datavisual,report",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "31",
                "name": "场景管理",
                "key": "reportlist",
                "url": "/dashboard/scenelist",
                "parent_key": "datavisual",
                "permission_name": "datavisual,reportlist",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "32",
                "name": "主题管理",
                "key": "theme",
                "url": "/dashboard/themelist",
                "parent_key": "datavisual",
                "permission_name": "datavisual,theme",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "59",
                "name": "新场景设计",
                "key": "newscene",
                "url": "/dashboard/newboarddesign",
                "parent_key": "datavisual",
                "permission_name": "datavisual,newscenes",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "60",
                "name": "新场景列表",
                "key": "newscenelist",
                "url": "/dashboard/newSceneList",
                "parent_key": "datavisual",
                "permission_name": "datavisual,newsceneslist",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }]
        }, {
            "id": "33",
            "name": "数据运营",
            "key": "dataoperation",
            "url": "/",
            "parent_key": "",
            "permission_name": "dataoperation",
            "icon": "fa-pie-chart",
            "options": null,
            "is_active": false,
            "child": [{
                "id": "34",
                "name": "数据钻探",
                "key": "datadrilling",
                "url": "/",
                "parent_key": "dataoperation",
                "permission_name": "dataoperation,datadrilling",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "36",
                "name": "数据协同",
                "key": "dataco",
                "url": "/",
                "parent_key": "dataoperation",
                "permission_name": "dataoperation,dataco",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "35",
                "name": "数据监控",
                "key": "datawatch",
                "url": "/",
                "parent_key": "dataoperation",
                "permission_name": "dataoperation,datawatch",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }]
        }, {
            "id": "37",
            "name": "系统管理",
            "key": "system",
            "url": "/",
            "parent_key": null,
            "permission_name": "system",
            "icon": "fa-cog",
            "options": null,
            "is_active": false,
            "child": [{
                "id": "39",
                "name": "角色/组管理",
                "key": "group",
                "url": "/account/grouplist",
                "parent_key": "system",
                "permission_name": "system,group",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "41",
                "name": "模块管理",
                "key": "module",
                "url": "/dashboard/module",
                "parent_key": "system",
                "permission_name": "system,module",
                "icon": "fa-cirle-0",
                "options": null,
                "is_active": false
            }, {
                "id": "49",
                "name": "数据标签",
                "key": "datapermtag",
                "url": "/dashboard/datapermtag",
                "parent_key": "system",
                "permission_name": "system,setting",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "65",
                "name": "组织机构",
                "key": "organization",
                "url": "/dashboard/organization",
                "parent_key": "system",
                "permission_name": "system,module",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "55",
                "name": "性能监测",
                "key": "systemmonitoring",
                "url": "/dashboard/server",
                "parent_key": "system",
                "permission_name": "datavisual,server",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "38",
                "name": "用户管理",
                "key": "account",
                "url": "/dashboard/userlist",
                "parent_key": "system",
                "permission_name": "system,account",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "56",
                "name": "license导入",
                "key": "importlicenseconfig",
                "url": "/dashboard/importlicenseconfig",
                "parent_key": "system",
                "permission_name": "system,setting",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "40",
                "name": "配置管理",
                "key": "setting",
                "url": "/",
                "parent_key": "system",
                "permission_name": "system,setting",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "2",
                "name": "业务类型",
                "key": "charttype",
                "url": "/dashboard/charttype",
                "parent_key": "system",
                "permission_name": "system,charttype",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "45",
                "name": "门户菜单配置",
                "key": "portalsetting",
                "url": "/dashboard/portalsetting",
                "parent_key": "system",
                "permission_name": "system,module",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "61",
                "name": "消息配置",
                "key": "msgconfig",
                "url": "/dashboard/msgconfig",
                "parent_key": "system",
                "permission_name": "system,module",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "47",
                "name": "首页配置",
                "key": "indexconfig",
                "url": "/dashboard/indexconfig",
                "parent_key": "system",
                "permission_name": "system,module",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "62",
                "name": "消息模板配置",
                "key": "msgconfig",
                "url": "/dashboard/msgtemplateconfig",
                "parent_key": "system",
                "permission_name": "system,module",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "63",
                "name": "登录页配置",
                "key": "loginpageconfig",
                "url": "/dashboard/loginpageconfig",
                "parent_key": "system",
                "permission_name": "system,module",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }]
        }, {
            "id": "51",
            "name": "配置包管理",
            "key": "packageConfigMgr",
            "url": "/",
            "parent_key": "",
            "permission_name": "packageConfigMgr",
            "icon": "fa-circle-o",
            "options": null,
            "is_active": false,
            "child": [{
                "id": "53",
                "name": "数据包导出",
                "key": "exportdataconfig",
                "url": "/dashboard/exportdataconfig",
                "parent_key": "packageConfigMgr",
                "permission_name": "system,setting",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "52",
                "name": "主题样式配置",
                "key": "chartsbgconfig",
                "url": "/dashboard/chartsbgconfig",
                "parent_key": "packageConfigMgr",
                "permission_name": "system,setting",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }, {
                "id": "64",
                "name": "数据字典",
                "key": "datadictionary",
                "url": "/dashboard/datadictionary",
                "parent_key": "packageConfigMgr",
                "permission_name": "system,setting",
                "icon": "fa-circle-o",
                "options": null,
                "is_active": false
            }]
        }]

        $scope.subMenu = []

        $scope.showSubMenu = function (menu, ev) {
            $scope.subMenuObj = menu
            var subMenuEle = $compile(angular.element('<div class="datax-menu-children-wrapper" ng-mouseleave="closeMenu()">\
                <ul>\
                    <li><i class="fa {{ subMenuObj.icon }}" style="position: absolute; left: 15px; top: 12px;"></i>{{ subMenuObj.name }}</li>\
                    <li ng-repeat="item in subMenu">{{ item.name }}</li>\
                </ul>\
            </div>'))($scope)
            if (menu.child && menu.child.length > 0) {
                getByClass('datax-menu-children-wrapper').remove()
                $scope.subMenu = menu.child
                getByEle(document.body).append(subMenuEle)
                subMenuEle[0].style['top'] = dom.offset(ev.target).top + 'px';
                subMenuEle[0].style['left'] = '50px';
                subMenuEle[0].style['opacity'] = 1;
            }
        }

        $scope.closeMenu = function () {
            getByClass('datax-menu-children-wrapper').remove()
        }

    })
    angular.bootstrap(document.getElementById("testPageController"), ["testPage"]);

})()