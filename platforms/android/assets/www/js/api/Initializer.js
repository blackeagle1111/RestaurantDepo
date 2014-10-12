var Initializer = (function () {
    
    var instance;
    function createObject() {
        var storage = CacheManager.getInstance();        
        return {
            createUser: function () {
                storage.put(Constant.USER_KEYS, [
                    { "userID": 0, "nickName": "AwesomeTaster", "RegisterDate": "12/03/2012", "hometown": "Burbank" },
                    { "userID": 1, "nickName": "EarlyCat", "RegisterDate": "10/30/2011", "hometown": "Glendale" },
                    { "userID": 2, "nickName": "RaceToDeath", "RegisterDate": "03/03/2010", "hometown": "Garden Grove" },
                    { "userID": 3, "nickName": "NeverStopEat", "RegisterDate": "04/03/2002", "hometown": "Reseda" },
                    { "userID": 4, "nickName": "EatStillDeath", "RegisterDate": "07/03/2003", "hometown": "Northridge" },
                    { "userID": 5, "nickName": "StomachBig", "RegisterDate": "10/03/2011", "hometown": "Canoga Park" },
                    { "userID": 6, "nickName": "BigMouth", "RegisterDate": "05/03/2014", "hometown": "Topanga" },
                    { "userID": 7, "nickName": "SparkleEyes", "RegisterDate": "02/03/2009", "hometown": "Simi Valley" },
                    { "userID": 8, "nickName": "AngelAmy", "RegisterDate": "02/05/2006", "hometown": "Hollywood" }
                ]);
            },
            createRating: function () {
                storage.put(Constant.RATING_KEYS, [
                    { "rateID": 0, "score": 4, "userID": 1, "comment": "this is awesome", "dateCreated": "11/20/2012" },
                    { "rateID": 1, "score": 5, "userID": 2, "comment": "this is #1", "dateCreated": "11/05/2011" },
                    { "rateID": 2, "score": 4.5, "userID": 3, "comment": "soup is A++", "dateCreated": "01/10/2012" },
                    { "rateID": 3, "score": 4, "userID": 0, "comment": "Appertizer is sooo delicious", "dateCreated": "10/09/2009" },
                    { "rateID": 4, "score": 5, "userID": 4, "comment": "Pho is the best in town", "dateCreated": "08/04/2004" },
                    { "rateID": 5, "score": 4, "userID": 5, "comment": "This restaurant is one of the kind", "dateCreated": "10/07/2012" },
                    { "rateID": 6, "score": 5, "userID": 6, "comment": "The service is very kind", "dateCreated": "06/10/2014" },
                    { "rateID": 7, "score": 1, "userID": 7, "comment": "It is too hot here", "dateCreated": "01/12/2012" },
                    { "rateID": 8, "score": 3, "userID": 8, "comment": "The space is big", "dateCreated": "01/01/2011" }
                ]);
            },
            createCategory: function () {
                storage.put(Constant.CATEGORY_KEYS, [
                    { "categoryID": 0, "name": "Appertizer", "note": "" },
                    { "categoryID": 1, "name": "Main Course", "note": "" },
                    { "categoryID": 2, "name": "House Special", "note": "" },
                    { "categoryID": 3, "name": "Dessert", "note": "" }
                ]);
            },
            createMenu: function () {
                storage.put(Constant.MENU_KEYS,
                   [
                    { "itemID": 0,"ID":0, "name": "Pho Bac 0", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg", "categoryID": 2 },
                    { "itemID": 0,"ID":1, "name": "Pho Bac 0", "desc": "Rice noodle soup", "price": 8, "size": "L  ","url":"images/full/001.jpg", "categoryID": 2 },
                    { "itemID": 1,"ID":2,"name": "Pho Bac 1", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 0 },
                    { "itemID": 1,"ID":3, "name": "Pho Bac 1", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 0 },
                    { "itemID": 2,"ID":4, "name": "Pho Bac 2", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 0 },
                    { "itemID": 2,"ID":5, "name": "Pho Bac 2", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 0 },
                    { "itemID": 3,"ID":6, "name": "Pho Bac 3", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 0 },
                    { "itemID": 3,"ID":7, "name": "Pho Bac 3", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 0 },
                    { "itemID": 4,"ID":8, "name": "Pho Bac 4", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 0 },
                    { "itemID": 4,"ID":9, "name": "Pho Bac 4", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 0 },
                    { "itemID": 5,"ID":10, "name": "Pho Bac 5", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 2 },
                    { "itemID": 5,"ID":11, "name": "Pho Bac 5", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 2 },
                    { "itemID": 6,"ID":12, "name": "Pho Bac 6", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 3 },
                    { "itemID": 6,"ID":13, "name": "Pho Bac 6", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 3 },
                    { "itemID": 7,"ID":14, "name": "Pho Bac 7", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 1 },
                    { "itemID": 7,"ID":15, "name": "Pho Bac 7", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 1 },
                    { "itemID": 8,"ID":16, "name": "Pho Bac 8", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 2 },
                    { "itemID": 8,"ID":17, "name": "Pho Bac 8", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 2 },
                    { "itemID": 9,"ID":18, "name": "Pho Bac 9", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 1 },
                    { "itemID": 9,"ID":19, "name": "Pho Bac 9", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 1 },
                    { "itemID": 10,"ID":20, "name": "Pho Bac 10", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 2 },
                    { "itemID": 10,"ID":21, "name": "Pho Bac 10", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 2 },
                    { "itemID": 11,"ID":22, "name": "Pho Bac 11", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 3 },
                    { "itemID": 12,"ID":23, "name": "Pho Bac 12", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 2 },
                    { "itemID": 12,"ID":24, "name": "Pho Bac 12", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 2 },
                    { "itemID": 11,"ID":25, "name": "Pho Bac 11", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 3 },
                    { "itemID": 13,"ID":26, "name": "Pho Bac 13", "desc": "Rice noodle soup", "price": 7, "size": "S","url":"images/full/001.jpg","categoryID": 3 },
                    { "itemID": 13,"ID":27, "name": "Pho Bac 13", "desc": "Rice noodle soup", "price": 8, "size": "L","url":"images/full/001.jpg","categoryID": 3 }
                    ]
                );
            }
        }
    }
    return {
        getInstance: function () {
            if (!instance)
                instance = createObject();
            return instance;
        }
    }
})();