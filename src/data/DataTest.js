export class DataTest {

    
    static getDiagnosticoInfo() {
        return {
            "server": "Apache/2.4.53 (Debian)",
            "phpExtensions": {
                "openssl": {
                    "status": "OK",
                    "version": "OpenSSL 1.1.1n  15 Mar 2022"
                },
                "SimpleXML": {
                    "status": "OK",
                    "version": "7.4.29"
                },
                "soap": {
                    "status": "OK",
                    "version": "7.4.29"
                },
                "dom": {
                    "status": "OK",
                    "version": "20031129"
                }
            },
            "commerce": {
                "ecommerce": "prestashop",
                "currentEcommerceVersion": "1.7.8.6",
                "lastEcommerceVersion": "8.1.1",
                "currentPluginVersion": "1.0.0",
                "lastPluginVersion": "2.0.3"
            },
            "php": {
                "status": "WARN: El plugin no ha sido testeado con esta version",
                "version": "7.4.29"
            }
        };
    }

    static getListInscription() {
        return {
            "data": [
                {
                    "id": "2",
                    "token": "01abbf6b3ce31f0ed02d1da90bbf2eb12111b739563b766be075c542198043a1",
                    "username": "tbk:650a530936:1",
                    "email": "transbankdevelopers@continuum.cl",
                    "userId": "1",
                    "ecommerceTokenId": null,
                    "tbkUser": null,
                    "orderId": "64",
                    "payAfterInscription": "0",
                    "responseCode": null,
                    "authorizationCode": null,
                    "cardType": null,
                    "cardNumber": null,
                    "from": "checkout",
                    "status": "failed",
                    "environment": "TEST",
                    "commerceCode": "597055555541",
                    "transbankResponse": null,
                    "createdAt": "2023-09-20 02:03:53",
                    "updatedAt": "0000-00-00 00:00:00",
                    "error": "UserCancelInscriptionOneclickException",
                    "originalError": null,
                    "customError": "La inscripci\u00f3n fue anulada por el usuario o hubo un error en el formulario de inscripci\u00f3n."
                },
                {
                    "id": "1",
                    "token": "01ab1e8b3852a24e8cdbdc483d47341745fdefe4405164ad37cd9c23119c59d7",
                    "username": "tbk:650a50ed94:1",
                    "email": "transbankdevelopers@continuum.cl",
                    "userId": "1",
                    "ecommerceTokenId": "6",
                    "tbkUser": "6bf6024f-54ed-444c-89e0-52ddaea0f801",
                    "orderId": "62",
                    "payAfterInscription": "0",
                    "responseCode": "0",
                    "authorizationCode": "1213",
                    "cardType": "Visa",
                    "cardNumber": "XXXXXXXXXXXX6623",
                    "from": "checkout",
                    "status": "completed",
                    "environment": "TEST",
                    "commerceCode": "597055555541",
                    "transbankResponse": "{\"responseCode\":0,\"tbkUser\":\"6bf6024f-54ed-444c-89e0-52ddaea0f801\",\"authorizationCode\":\"1213\",\"cardType\":\"Visa\",\"cardNumber\":\"XXXXXXXXXXXX6623\"}",
                    "createdAt": "2023-09-20 01:54:54",
                    "updatedAt": "0000-00-00 00:00:00",
                    "error": null,
                    "originalError": null,
                    "customError": null
                }
            ],
            "total": "2"
        };
    }

    static getListApiServiceLog() {
        return {
            "data": [
                {
                    "id": "14",
                    "buyOrder": "64",
                    "service": "start",
                    "product": "webpay_oneclick",
                    "environment": "TEST",
                    "commerceCode": "597055555541",
                    "input": "{\"username\":\"tbk:650a530936:1\",\"email\":\"transbankdevelopers@continuum.cl\",\"returnUrl\":\"http://localhost:8000/?wc-api=wc_gateway_transbank_oneclick_return_payments\"}",
                    "response": "{\"token\":\"01abbf6b3ce31f0ed02d1da90bbf2eb12111b739563b766be075c542198043a1\",\"urlWebpay\":\"https://webpay3gint.transbank.cl/webpayserver/bp_multicode_inscription.cgi\"}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 02:03:53"
                },
                {
                    "id": "13",
                    "buyOrder": "tbk:650a52ce12:64",
                    "service": "create",
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "commerceCode": "597055555532",
                    "input": "{\"sessionId\":\"tbk:sessionId:650a52ce12:64\",\"amount\":1000,\"returnUrl\":\"http://localhost:8000/?wc-api=wc_gateway_transbank_webpay_plus_rest\"}",
                    "response": "{\"token\":\"01ab1e9510fd5c5238fb58a4c9bfbade46ec46b91a693ee05298bbe461e977d2\",\"url\":\"https://webpay3gint.transbank.cl/webpayserver/initTransaction\"}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 02:02:54"
                },
                {
                    "id": "12",
                    "buyOrder": "tbk:650a51df95:63",
                    "service": "commit",
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "commerceCode": "597055555532",
                    "input": "{\"token\":\"01ab4b1ef36baaa1aaf2a828313c60cbd5bbf2cbbaa4125228008acfec4a93b7\"}",
                    "response": "{\"vci\":\"TSY\",\"status\":\"FAILED\",\"responseCode\":-1,\"amount\":1000,\"authorizationCode\":\"000000\",\"paymentTypeCode\":\"VN\",\"accountingDate\":\"0919\",\"installmentsNumber\":0,\"installmentsAmount\":null,\"sessionId\":\"tbk:sessionId:650a51df95:63\",\"buyOrder\":\"tbk:650a51df95:63\",\"cardNumber\":\"0568\",\"cardDetail\":{\"card_number\":\"0568\"},\"transactionDate\":\"2023-09-20T01:58:55.092Z\",\"balance\":null}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 01:59:16"
                },
                {
                    "id": "11",
                    "buyOrder": "tbk:650a51df95:63",
                    "service": "create",
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "commerceCode": "597055555532",
                    "input": "{\"sessionId\":\"tbk:sessionId:650a51df95:63\",\"amount\":1000,\"returnUrl\":\"http://localhost:8000/?wc-api=wc_gateway_transbank_webpay_plus_rest\"}",
                    "response": "{\"token\":\"01ab4b1ef36baaa1aaf2a828313c60cbd5bbf2cbbaa4125228008acfec4a93b7\",\"url\":\"https://webpay3gint.transbank.cl/webpayserver/initTransaction\"}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 01:58:56"
                },
                {
                    "id": "10",
                    "buyOrder": "tbk:650a4f9c8a:61",
                    "service": "status",
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "commerceCode": "597055555532",
                    "input": "{\"token\":\"01ab8c7bc8ee9147616f0465b59de850a7c00f97b7ac979c75ee85689bf0b324\"}",
                    "response": "{\"vci\":\"TSY\",\"status\":\"AUTHORIZED\",\"responseCode\":0,\"amount\":1000,\"authorizationCode\":\"1213\",\"paymentTypeCode\":\"VN\",\"accountingDate\":\"0919\",\"installmentsNumber\":0,\"installmentsAmount\":null,\"sessionId\":\"tbk:sessionId:650a4f9c8a:61\",\"buyOrder\":\"tbk:650a4f9c8a:61\",\"cardNumber\":\"6623\",\"cardDetail\":{\"card_number\":\"6623\"},\"transactionDate\":\"2023-09-20T01:49:16.122Z\",\"balance\":null}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 01:56:56"
                },
                {
                    "id": "9",
                    "buyOrder": "tbk:650a513f12:62",
                    "service": "status",
                    "product": "webpay_oneclick",
                    "environment": "TEST",
                    "commerceCode": "597055555541",
                    "input": null,
                    "response": "{\"buyOrder\":\"tbk:650a513f12:62\",\"sessionId\":null,\"cardNumber\":\"6623\",\"expirationDate\":null,\"accountingDate\":\"0919\",\"transactionDate\":\"2023-09-20T01:56:14.341Z\",\"details\":[{\"amount\":1000,\"status\":\"AUTHORIZED\",\"authorizationCode\":\"1213\",\"paymentTypeCode\":\"VN\",\"responseCode\":0,\"installmentsNumber\":0,\"installmentsAmount\":null,\"commerceCode\":\"597055555542\",\"buyOrder\":\"tbk:650a50ed94:1:62\"}]}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 01:56:42"
                },
                {
                    "id": "8",
                    "buyOrder": "tbk:650a513f12:62",
                    "service": "authorize",
                    "product": "webpay_oneclick",
                    "environment": "TEST",
                    "commerceCode": "597055555541",
                    "input": "{\"child_commerce_code\":\"597055555542\",\"parentBuyOrder\":\"tbk:650a513f12:62\",\"childBuyOrder\":\"tbk:650a50ed94:1:62\",\"amount\":1000,\"username\":\"tbk:650a50ed94:1\",\"tbkUser\":\"6bf6024f-54ed-444c-89e0-52ddaea0f801\"}",
                    "response": "{\"buyOrder\":\"tbk:650a513f12:62\",\"sessionId\":null,\"cardNumber\":\"6623\",\"expirationDate\":null,\"accountingDate\":\"0919\",\"transactionDate\":\"2023-09-20T01:56:14.341Z\",\"details\":[{\"amount\":1000,\"status\":\"AUTHORIZED\",\"authorizationCode\":\"1213\",\"paymentTypeCode\":\"VN\",\"responseCode\":0,\"installmentsNumber\":0,\"installmentsAmount\":null,\"commerceCode\":\"597055555542\",\"buyOrder\":\"tbk:650a50ed94:1:62\"}]}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 01:56:15"
                },
                {
                    "id": "7",
                    "buyOrder": "62",
                    "service": "finish",
                    "product": "webpay_oneclick",
                    "environment": "TEST",
                    "commerceCode": "597055555541",
                    "input": "{\"tbkToken\":\"01ab1e8b3852a24e8cdbdc483d47341745fdefe4405164ad37cd9c23119c59d7\"}",
                    "response": "{\"responseCode\":0,\"tbkUser\":\"6bf6024f-54ed-444c-89e0-52ddaea0f801\",\"authorizationCode\":\"1213\",\"cardType\":\"Visa\",\"cardNumber\":\"XXXXXXXXXXXX6623\"}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 01:55:19"
                },
                {
                    "id": "6",
                    "buyOrder": "62",
                    "service": "start",
                    "product": "webpay_oneclick",
                    "environment": "TEST",
                    "commerceCode": "597055555541",
                    "input": "{\"username\":\"tbk:650a50ed94:1\",\"email\":\"transbankdevelopers@continuum.cl\",\"returnUrl\":\"http://localhost:8000/?wc-api=wc_gateway_transbank_oneclick_return_payments\"}",
                    "response": "{\"token\":\"01ab1e8b3852a24e8cdbdc483d47341745fdefe4405164ad37cd9c23119c59d7\",\"urlWebpay\":\"https://webpay3gint.transbank.cl/webpayserver/bp_multicode_inscription.cgi\"}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 01:54:54"
                },
                {
                    "id": "5",
                    "buyOrder": "tbk:650a4f9c8a:61",
                    "service": "status",
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "commerceCode": "597055555532",
                    "input": "{\"token\":\"01ab8c7bc8ee9147616f0465b59de850a7c00f97b7ac979c75ee85689bf0b324\"}",
                    "response": "{\"vci\":\"TSY\",\"status\":\"AUTHORIZED\",\"responseCode\":0,\"amount\":1000,\"authorizationCode\":\"1213\",\"paymentTypeCode\":\"VN\",\"accountingDate\":\"0919\",\"installmentsNumber\":0,\"installmentsAmount\":null,\"sessionId\":\"tbk:sessionId:650a4f9c8a:61\",\"buyOrder\":\"tbk:650a4f9c8a:61\",\"cardNumber\":\"6623\",\"cardDetail\":{\"card_number\":\"6623\"},\"transactionDate\":\"2023-09-20T01:49:16.122Z\",\"balance\":null}",
                    "error": null,
                    "originalError": null,
                    "customError": null,
                    "createdAt": "2023-09-20 01:53:59"
                }
            ],
            "total": "14"
        };
    }

    static getListExecutionErrorLog() {
        return {
            "data": [
                {
                    "id": "3",
                    "buyOrder": "0",
                    "service": "finish",
                    "product": "webpay_oneclick",
                    "environment": "TEST",
                    "commerceCode": "597055555541",
                    "data": "{\"method\":\"GET\",\"params\":{\"wc-api\":\"wc_gateway_transbank_oneclick_return_payments\",\"TBK_TOKEN\":\"01abbf6b3ce31f0ed02d1da90bbf2eb12111b739563b766be075c542198043a1\",\"TBK_ORDEN_COMPRA\":\"7cc3cfe6-a979-4ded-96d3-12\",\"TBK_ID_SESION\":\"\"}}",
                    "error": "UserCancelInscriptionOneclickException",
                    "originalError": null,
                    "customError": "La inscripci\u00f3n fue anulada por el usuario o hubo un error en el formulario de inscripci\u00f3n.",
                    "createdAt": "2023-09-20 02:03:58"
                },
                {
                    "id": "2",
                    "buyOrder": "tbk:650a52ce12:64",
                    "service": "commit",
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "commerceCode": "597055555532",
                    "data": "{\"method\":\"GET\",\"params\":{\"wc-api\":\"wc_gateway_transbank_webpay_plus_rest\",\"TBK_TOKEN\":\"01ab1e9510fd5c5238fb58a4c9bfbade46ec46b91a693ee05298bbe461e977d2\",\"TBK_ORDEN_COMPRA\":\"tbk:650a52ce12:64\",\"TBK_ID_SESION\":\"tbk:sessionId:650a52ce12:64\"}}",
                    "error": "UserCancelWebpayException",
                    "originalError": null,
                    "customError": "La transacci\u00f3n fue anulada por el usuario.",
                    "createdAt": "2023-09-20 02:02:59"
                },
                {
                    "id": "1",
                    "buyOrder": "tbk:650a51df95:63",
                    "service": "commit",
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "commerceCode": "597055555532",
                    "data": "{\"token\":\"01ab4b1ef36baaa1aaf2a828313c60cbd5bbf2cbbaa4125228008acfec4a93b7\",\"response\":{\"vci\":\"TSY\",\"status\":\"FAILED\",\"responseCode\":-1,\"amount\":1000,\"authorizationCode\":\"000000\",\"paymentTypeCode\":\"VN\",\"accountingDate\":\"0919\",\"installmentsNumber\":0,\"installmentsAmount\":null,\"sessionId\":\"tbk:sessionId:650a51df95:63\",\"buyOrder\":\"tbk:650a51df95:63\",\"cardNumber\":\"0568\",\"cardDetail\":{\"card_number\":\"0568\"},\"transactionDate\":\"2023-09-20T01:58:55.092Z\",\"balance\":null}}",
                    "error": "RejectedCommitWebpayException",
                    "originalError": null,
                    "customError": "El commit de la transacci\u00f3n ha sido rechazada en Transbank (c\u00f3digo de respuesta: -1)",
                    "createdAt": "2023-09-20 01:59:16"
                }
            ],
            "total": "3"
        };
    }

    static getListTransaction() {
        return {
            "data": [
                {
                    "id": "6",
                    "orderId": "11",
                    "buyOrder": "tbk:650dc238e3:11",
                    "childBuyOrder": "tbk:650dc20e43:4:11",
                    "commerceCode": "597055555541",
                    "childCommerceCode": "597055555542",
                    "amount": "34",
                    "refundAmount": "34",
                    "token": null,
                    "transbankStatus": "AUTHORIZED",
                    "sessionId": null,
                    "status": "ecommerce_approved",
                    "transbankResponse": "{\u0022buyOrder\u0022:\u0022tbk:650dc238e3:11\u0022,\u0022sessionId\u0022:null,\u0022cardNumber\u0022:\u00222032\u0022,\u0022expirationDate\u0022:null,\u0022accountingDate\u0022:\u00220922\u0022,\u0022transactionDate\u0022:\u00222023-09-22T16:35:05.462Z\u0022,\u0022details\u0022:[{\u0022amount\u0022:34,\u0022status\u0022:\u0022AUTHORIZED\u0022,\u0022authorizationCode\u0022:\u00221617\u0022,\u0022paymentTypeCode\u0022:\u0022VN\u0022,\u0022responseCode\u0022:0,\u0022installmentsNumber\u0022:0,\u0022installmentsAmount\u0022:null,\u0022commerceCode\u0022:\u0022597055555542\u0022,\u0022buyOrder\u0022:\u0022tbk:650dc20e43:4:11\u0022}]}",
                    "lastRefundType": "REVERSED",
                    "lastRefundResponse": "{\u0022type\u0022:\u0022REVERSED\u0022,\u0022authorizationCode\u0022:null,\u0022authorizationDate\u0022:null,\u0022nullifiedAmount\u0022:null,\u0022balance\u0022:null,\u0022responseCode\u0022:null}",
                    "allRefundResponse": "[\u0022{\\\u0022type\\\u0022:\\\u0022REVERSED\\\u0022,\\\u0022authorizationCode\\\u0022:null,\\\u0022authorizationDate\\\u0022:null,\\\u0022nullifiedAmount\\\u0022:null,\\\u0022balance\\\u0022:null,\\\u0022responseCode\\\u0022:null}\u0022]",
                    "oneclickUsername": "tbk:650dc20e43:4",
                    "product": "webpay_oneclick",
                    "environment": "TEST",
                    "createdAt": "2023-09-22 16:35:04",
                    "updatedAt": "2023-09-22 16:35:04",
                    "error": null,
                    "originalError": null,
                    "customError": null
                },
                {
                    "id": "5",
                    "orderId": "10",
                    "buyOrder": "tbk:650dc0d80f:10",
                    "childBuyOrder": null,
                    "commerceCode": "597055555532",
                    "childCommerceCode": null,
                    "amount": "103",
                    "refundAmount": "103",
                    "token": "01ab53fdcecf07d955fffa0af6ab1645a84cf95029a52f1d881280b1e3cee9a8",
                    "transbankStatus": "AUTHORIZED",
                    "sessionId": "tbk:sessionId:650dc0d80f:10",
                    "status": "ecommerce_approved",
                    "transbankResponse": "{\u0022vci\u0022:\u0022TSY\u0022,\u0022status\u0022:\u0022AUTHORIZED\u0022,\u0022responseCode\u0022:0,\u0022amount\u0022:103,\u0022authorizationCode\u0022:\u00221213\u0022,\u0022paymentTypeCode\u0022:\u0022VN\u0022,\u0022accountingDate\u0022:\u00220922\u0022,\u0022installmentsNumber\u0022:0,\u0022installmentsAmount\u0022:null,\u0022sessionId\u0022:\u0022tbk:sessionId:650dc0d80f:10\u0022,\u0022buyOrder\u0022:\u0022tbk:650dc0d80f:10\u0022,\u0022cardNumber\u0022:\u00226623\u0022,\u0022cardDetail\u0022:{\u0022card_number\u0022:\u00226623\u0022},\u0022transactionDate\u0022:\u00222023-09-22T16:29:12.651Z\u0022,\u0022balance\u0022:null}",
                    "lastRefundType": "REVERSED",
                    "lastRefundResponse": "{\u0022type\u0022:\u0022REVERSED\u0022,\u0022authorizationCode\u0022:null,\u0022authorizationDate\u0022:null,\u0022nullifiedAmount\u0022:null,\u0022balance\u0022:null,\u0022responseCode\u0022:null}",
                    "allRefundResponse": "[\u0022{\\\u0022type\\\u0022:\\\u0022REVERSED\\\u0022,\\\u0022authorizationCode\\\u0022:null,\\\u0022authorizationDate\\\u0022:null,\\\u0022nullifiedAmount\\\u0022:null,\\\u0022balance\\\u0022:null,\\\u0022responseCode\\\u0022:null}\u0022]",
                    "oneclickUsername": null,
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "createdAt": "2023-09-22 16:29:12",
                    "updatedAt": "2023-09-22 16:29:12",
                    "error": null,
                    "originalError": null,
                    "customError": null
                },
                {
                    "id": "4",
                    "orderId": "64",
                    "buyOrder": "tbk:650a52ce12:64",
                    "childBuyOrder": null,
                    "commerceCode": "597055555532",
                    "childCommerceCode": null,
                    "amount": "1000",
                    "refundAmount": "0",
                    "token": "01ab1e9510fd5c5238fb58a4c9bfbade46ec46b91a693ee05298bbe461e977d2",
                    "transbankStatus": null,
                    "sessionId": "tbk:sessionId:650a52ce12:64",
                    "status": "aborted_by_user",
                    "transbankResponse": null,
                    "lastRefundType": null,
                    "lastRefundResponse": null,
                    "allRefundResponse": null,
                    "oneclickUsername": null,
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "createdAt": "2023-09-20 02:02:54",
                    "updatedAt": "0000-00-00 00:00:00",
                    "error": "UserCancelWebpayException",
                    "originalError": null,
                    "customError": "La transacci\u00f3n fue anulada por el usuario."
                },
                {
                    "id": "3",
                    "orderId": "63",
                    "buyOrder": "tbk:650a51df95:63",
                    "childBuyOrder": null,
                    "commerceCode": "597055555532",
                    "childCommerceCode": null,
                    "amount": "1000",
                    "refundAmount": "0",
                    "token": "01ab4b1ef36baaa1aaf2a828313c60cbd5bbf2cbbaa4125228008acfec4a93b7",
                    "transbankStatus": null,
                    "sessionId": "tbk:sessionId:650a51df95:63",
                    "status": "failed",
                    "transbankResponse": null,
                    "lastRefundType": null,
                    "lastRefundResponse": null,
                    "allRefundResponse": null,
                    "oneclickUsername": null,
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "createdAt": "2023-09-20 01:58:55",
                    "updatedAt": "0000-00-00 00:00:00",
                    "error": "RejectedCommitWebpayException",
                    "originalError": null,
                    "customError": "El commit de la transacci\u00f3n ha sido rechazada en Transbank (c\u00f3digo de respuesta: -1)"
                },
                {
                    "id": "2",
                    "orderId": "62",
                    "buyOrder": "tbk:650a513f12:62",
                    "childBuyOrder": "tbk:650a50ed94:1:62",
                    "commerceCode": "597055555541",
                    "childCommerceCode": "597055555542",
                    "amount": "1000",
                    "refundAmount": "0",
                    "token": null,
                    "transbankStatus": "AUTHORIZED",
                    "sessionId": null,
                    "status": "ecommerce_approved",
                    "transbankResponse": "{\"buyOrder\":\"tbk:650a513f12:62\",\"sessionId\":null,\"cardNumber\":\"6623\",\"expirationDate\":null,\"accountingDate\":\"0919\",\"transactionDate\":\"2023-09-20T01:56:14.341Z\",\"details\":[{\"amount\":1000,\"status\":\"AUTHORIZED\",\"authorizationCode\":\"1213\",\"paymentTypeCode\":\"VN\",\"responseCode\":0,\"installmentsNumber\":0,\"installmentsAmount\":null,\"commerceCode\":\"597055555542\",\"buyOrder\":\"tbk:650a50ed94:1:62\"}]}",
                    "lastRefundType": null,
                    "lastRefundResponse": null,
                    "allRefundResponse": null,
                    "oneclickUsername": "tbk:650a50ed94:1",
                    "product": "webpay_oneclick",
                    "environment": "TEST",
                    "createdAt": "2023-09-20 01:56:15",
                    "updatedAt": "0000-00-00 00:00:00",
                    "error": null,
                    "originalError": null,
                    "customError": null
                },
                {
                    "id": "1",
                    "orderId": "61",
                    "buyOrder": "tbk:650a4f9c8a:61",
                    "childBuyOrder": null,
                    "commerceCode": "597055555532",
                    "childCommerceCode": null,
                    "amount": "1000",
                    "refundAmount": "0",
                    "token": "01ab8c7bc8ee9147616f0465b59de850a7c00f97b7ac979c75ee85689bf0b324",
                    "transbankStatus": "AUTHORIZED",
                    "sessionId": "tbk:sessionId:650a4f9c8a:61",
                    "status": "ecommerce_approved",
                    "transbankResponse": "{\"vci\":\"TSY\",\"status\":\"AUTHORIZED\",\"responseCode\":0,\"amount\":1000,\"authorizationCode\":\"1213\",\"paymentTypeCode\":\"VN\",\"accountingDate\":\"0919\",\"installmentsNumber\":0,\"installmentsAmount\":null,\"sessionId\":\"tbk:sessionId:650a4f9c8a:61\",\"buyOrder\":\"tbk:650a4f9c8a:61\",\"cardNumber\":\"6623\",\"cardDetail\":{\"card_number\":\"6623\"},\"transactionDate\":\"2023-09-20T01:49:16.122Z\",\"balance\":null}",
                    "lastRefundType": null,
                    "lastRefundResponse": null,
                    "allRefundResponse": null,
                    "oneclickUsername": null,
                    "product": "webpay_plus",
                    "environment": "TEST",
                    "createdAt": "2023-09-20 01:49:16",
                    "updatedAt": "0000-00-00 00:00:00",
                    "error": null,
                    "originalError": null,
                    "customError": null
                }
            ],
            "total": "6"
        };
    }

    static getLogInfo(){
        return {
            "dir": "/var/www/html/var/logs/Transbank_webpay",
            "last": "/var/www/html/var/logs/Transbank_webpay/log_transbank-2023-09-04.log",
            "logs": [
                {
                    "filename": "log_transbank-2023-09-04.log",
                    "modified": 1693844720
                },
                {
                    "filename": "log_transbank-2023-09-03.log",
                    "modified": 1693773476
                },
                {
                    "filename": "log_transbank-2023-09-02.log",
                    "modified": 1693683423
                },
                {
                    "filename": "log_transbank-2023-09-01.log",
                    "modified": 1693604653
                },
                {
                    "filename": "log_transbank-2023-08-30.log",
                    "modified": 1693366582
                },
                {
                    "filename": "log_transbank-2023-08-29.log",
                    "modified": 1693345018
                },
                {
                    "filename": "log_transbank_prestashop_2023-08-29.log",
                    "modified": 1693332291
                },
                {
                    "filename": "log_transbank-2023-08-28.log",
                    "modified": 1693242015
                },
                {
                    "filename": "log_transbank-2023-08-25.log",
                    "modified": 1692989776
                }
            ],
            "length": 9
        };
    }

    static getWebpayplusConfig(){
        return {
            "active": true,
            "production": false,
            "apikey": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
            "commerceCode": "597055555532",
            "orderStatusAfterPayment": "3"
        };
    }

    static saveWebpayplusConfig(data){
        return data;
    }

    static resetWebpayplusConfig(data){
        return {
            "active": true,
            "production": false,
            "apikey": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
            "commerceCode": "597055555532",
            "orderStatusAfterPayment": "3"
        };
    }

    static getWebpayplusMallConfig(){
        return {
            "active": false,
            "production": false,
            "multiStore": true,
            "apikey": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
            "commerceCode": "597055555535",
            "childCommerceCode": "597055555536",
            "arrayChildCommerceCode": [
                {
                    "storeId": "1",
                    "commerceCode": "597055555536"
                },
                {
                    "storeId": "2",
                    "commerceCode": "597055555537"
                }
            ],
            "orderStatusAfterPayment": "3"
        };
    }

    static saveWebpayplusMallConfig(data){
        return data;
    }

    static resetWebpayplusMallConfig(data){
        return {
            "active": false,
            "production": false,
            "multiStore": true,
            "apikey": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
            "commerceCode": "597055555535",
            "childCommerceCode": "597055555536",
            "arrayChildCommerceCode": [
                {
                    "storeId": "1",
                    "commerceCode": "597055555536"
                },
                {
                    "storeId": "2",
                    "commerceCode": "597055555537"
                }
            ],
            "orderStatusAfterPayment": "3"
        };
    }

    static getOneclickConfig(){
        return {
            "active": true,
            "production": false,
            "multiStore": false,
            "apikey": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
            "commerceCode": "597055555541",
            "childCommerceCode": "597055555542",
            "orderStatusAfterPayment": "3"
        };
    }

    static saveOneclickConfig(data){
        return data;
    }

    static resetOneclickConfig(data){
        return {
            "active": false,
            "production": false,
            "apikey": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
            "commerceCode": "597055555541",
            "childCommerceCode": "597055555542",
            "orderStatusAfterPayment": "3"
        };
    }

    static getEcommerceConfig(data) {
        return {
            "ecommerceInstalationId": "xxx",
            "timezone": "Europe/Paris",
            "listOrderStatusAfterPayment": [
                {
                    "value": "2",
                    "label": "Pago Aceptado"
                },
                {
                    "value": "3",
                    "label": "Preparación en curso"
                }
            ],
            "stores": [
                {
                    "storeId": "1",
                    "storeName": "PrestaShop 1"
                },
                {
                    "storeId": "2",
                    "storeName": "Prestashop 2"
                }
            ]
        };
    }

    static executeTbkStatus(data) {
        return {
            "vci":"TSY",
            "status":"AUTHORIZED",
            "responseCode":0,
            "amount":35,
            "authorizationCode":"1213",
            "paymentTypeCode":"VN",
            "accountingDate":"0829",
            "installmentsNumber":0,
            "installmentsAmount":null,
            "sessionId":"wc:sessionId:64ee85f65e7fd:10",
            "buyOrder":"wc:64ee85f65e7fd:10",
            "cardNumber":"6623",
            "cardDetail":{"card_number":"6623"},
            "transactionDate":"2023-08-29T23:57:43.222Z",
            "balance":null
        };
    }

    static executeTbkRefund(data) {
        return {
            "vci":"TSY",
            "status":"AUTHORIZED",
            "responseCode":0,
            "amount":35,
            "authorizationCode":"1213",
            "paymentTypeCode":"VN",
            "accountingDate":"0829",
            "installmentsNumber":0,
            "installmentsAmount":null,
            "sessionId":"wc:sessionId:64ee85f65e7fd:10",
            "buyOrder":"wc:64ee85f65e7fd:10",
            "cardNumber":"6623",
            "cardDetail":{"card_number":"6623"},
            "transactionDate":"2023-08-29T23:57:43.222Z",
            "balance":null
        };
    }

    static checkPlugin(data) {
        return {
            "transactionTable": null,
            "inscriptionTable": null,
            "apiServiceLogTable": null,
            "executionErrorLogTable": null,
            "ok": true,
            "webpayplusCommerceCode": null,
            "webpayplusApikey": null,
            "webpayplusOrderStatusAfterPayment": null,
            "oneclickCommerceCode": null,
            "oneclickApikey": null,
            "oneclickOrderStatusAfterPayment": null,
            "integrationUrl": null,
            "productionUrl": null,
            "webpayplusCreateTransaction": {
                "error": null,
                "result": {
                    "token": "01abd7430ebf51e0929060a35836f862b01d288a54be340505f631a6d74f8ef1",
                    "url": "https://webpay3gint.transbank.cl/webpayserver/initTransaction"
                },
                "ok": true
            },
            "oneclickStartInscription": {
                "error": null,
                "result": {
                    "token": "01abaa74a646b56d2a86583c30dd37aac457028ab5492d2ceb389ee20e176d0b",
                    "urlWebpay": "https://webpay3gint.transbank.cl/webpayserver/bp_multicode_inscription.cgi"
                },
                "ok": true
            }
        };
    }

    static pluginStatusSummary(params){
        return {
            "plugin": {
                "ok": false,
                "warning": "Versión nueva disponible"
            },
            "webpayplus": {
                "active": true,
                "ok": true,
                "production": true,
                "error": null,
                "warning": null
            },
            "webpayplusmall": {
                "active": true,
                "ok": false,
                "production": false,
                "error": "Hay un error en el código de comercio",
                "warning": null
            },
            "oneclick": {
                "active": false,
                "ok": true,
                "production": false,
                "error": null,
                "warning": null
            },
            "contact": {
                "ok": false,
                "warning": "Falta completar"
            },
            "transaction": {
                "active": false,
                "production": true,
                "last": "2023-09-20 01:56:15"
            },
        };
    }

    static lastTransactionsByPeriod(params){
        if (params['period'] === 1){
            return {
                production: true,
                length: 5,
                "active": true,
                data: [
                    {
                        "period" : "2023-09-10",
                        "total" : 20,
                        "webpay_plus" : 10,
                        "webpay_plus_mall" : 5,
                        "webpay_oneclick" : 5
                    },
                    {
                        "period" : "2023-09-11",
                        "total" : 10,
                        "webpay_plus" : 0,
                        "webpay_plus_mall" : 5,
                        "webpay_oneclick" : 5
                    },
                    {
                        "period" : "2023-09-12",
                        "total" : 15,
                        "webpay_plus" : 10,
                        "webpay_plus_mall" : 5,
                        "webpay_oneclick" : 0
                    },
                    {
                        "period" : "2023-09-13",
                        "total" : 30,
                        "webpay_plus" : 10,
                        "webpay_plus_mall" : 15,
                        "webpay_oneclick" : 5
                    }
                ]
            };
        }
        if (params['period'] === 2){
            return {
                production: false,
                length: 5,
                "active": true,
                data: [
                    {
                        "period" : "37",
                        "total" : 20,
                        "webpay_plus" : 10,
                        "webpay_plus_mall" : 5,
                        "webpay_oneclick" : 5
                    },
                    {
                        "period" : "38",
                        "total" : 10,
                        "webpay_plus" : 0,
                        "webpay_plus_mall" : 5,
                        "webpay_oneclick" : 5
                    },
                    {
                        "period" : "39",
                        "total" : 15,
                        "webpay_plus" : 10,
                        "webpay_plus_mall" : 5,
                        "webpay_oneclick" : 0
                    },
                    {
                        "period" : "40",
                        "total" : 30,
                        "webpay_plus" : 10,
                        "webpay_plus_mall" : 15,
                        "webpay_oneclick" : 5
                    }
                ]
            };
        }

        if (params['period'] === 3){
            return {
                production: true,
                length: 5,
                "active": true,
                data: [
                    {
                        "period" : "2023-12",
                        "total" : 20,
                        "webpay_plus" : 10,
                        "webpay_plus_mall" : 5,
                        "webpay_oneclick" : 5
                    },
                    {
                        "period" : "2023-01",
                        "total" : 10,
                        "webpay_plus" : 0,
                        "webpay_plus_mall" : 5,
                        "webpay_oneclick" : 5
                    },
                    {
                        "period" : "2023-02",
                        "total" : 15,
                        "webpay_plus" : 10,
                        "webpay_plus_mall" : 5,
                        "webpay_oneclick" : 0
                    },
                    {
                        "period" : "2023-03",
                        "total" : 30,
                        "webpay_plus" : 10,
                        "webpay_plus_mall" : 15,
                        "webpay_oneclick" : 5
                    }
                ]
            };
        }
    }

    static lastTransactionsOk(params){
        return {
            "active": true,
            "production": true,
            "total": 10,
            "ok": 7
        };
    }

    static createTables(){
        return {
            "transactionTable": null,
            "inscriptionTable": null,
            "apiServiceLogTable": null,
            "executionErrorLogTable": null,
            "ok": true
        }
    }

    static getContact(data) {
        return {
            commerceName: 'CatDog',
            commerceEmail: 'contacto@catdog.cl',
            commerceResponsible: 'Don Gato',
            integratorName: 'Bill Gates',
            integratorEmail: 'programador_feliz@correo.com'
        };
    }

    static saveContact(data) {
        return {
            commerceName: 'CatDog',
            commerceEmail: 'contacto@catdog.cl',
            commerceResponsible: 'Don Gato',
            integratorName: 'Bill Gates',
            integratorEmail: 'programador_feliz@correo.com'
        };
    }

    

    static getPhpInfo(){
        return {
            "string": {
                "content": "<table>\n<tr class=\"h\"><td>\n<a href=\"http://www.php.net/\"><img border=\"0\" src=\"data:image/png;base64,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\" alt=\"PHP logo\" /></a><h1 class=\"p\">PHP Version 7.4.29</h1>\n</td></tr>\n</table>\n<table>\n<tr><td class=\"e\">System </td><td class=\"v\">Linux 1b7010fa525e 5.10.16.3-microsoft-standard-WSL2 #1 SMP Fri Apr 2 22:23:49 UTC 2021 x86_64 </td></tr>\n<tr><td class=\"e\">Build Date </td><td class=\"v\">May 11 2022 14:19:02 </td></tr>\n<tr><td class=\"e\">Configure Command </td><td class=\"v\"> &#039;./configure&#039;  &#039;--build=x86_64-linux-gnu&#039; &#039;--with-config-file-path=/usr/local/etc/php&#039; &#039;--with-config-file-scan-dir=/usr/local/etc/php/conf.d&#039; &#039;--enable-option-checking=fatal&#039; &#039;--with-mhash&#039; &#039;--with-pic&#039; &#039;--enable-ftp&#039; &#039;--enable-mbstring&#039; &#039;--enable-mysqlnd&#039; &#039;--with-password-argon2&#039; &#039;--with-sodium=shared&#039; &#039;--with-pdo-sqlite=/usr&#039; &#039;--with-sqlite3=/usr&#039; &#039;--with-curl&#039; &#039;--with-iconv&#039; &#039;--with-openssl&#039; &#039;--with-readline&#039; &#039;--with-zlib&#039; &#039;--disable-phpdbg&#039; &#039;--with-pear&#039; &#039;--with-libdir=lib/x86_64-linux-gnu&#039; &#039;--disable-cgi&#039; &#039;--with-apxs2&#039; &#039;build_alias=x86_64-linux-gnu&#039; </td></tr>\n<tr><td class=\"e\">Server API </td><td class=\"v\">Apache 2.0 Handler </td></tr>\n<tr><td class=\"e\">Virtual Directory Support </td><td class=\"v\">disabled </td></tr>\n<tr><td class=\"e\">Configuration File (php.ini) Path </td><td class=\"v\">/usr/local/etc/php </td></tr>\n<tr><td class=\"e\">Loaded Configuration File </td><td class=\"v\">/usr/local/etc/php/php.ini </td></tr>\n<tr><td class=\"e\">Scan this dir for additional .ini files </td><td class=\"v\">/usr/local/etc/php/conf.d </td></tr>\n<tr><td class=\"e\">Additional .ini files parsed </td><td class=\"v\">/usr/local/etc/php/conf.d/docker-php-ext-bcmath.ini,\n/usr/local/etc/php/conf.d/docker-php-ext-gd.ini,\n/usr/local/etc/php/conf.d/docker-php-ext-intl.ini,\n/usr/local/etc/php/conf.d/docker-php-ext-opcache.ini,\n/usr/local/etc/php/conf.d/docker-php-ext-pdo_mysql.ini,\n/usr/local/etc/php/conf.d/docker-php-ext-soap.ini,\n/usr/local/etc/php/conf.d/docker-php-ext-sodium.ini,\n/usr/local/etc/php/conf.d/docker-php-ext-zip.ini\n </td></tr>\n<tr><td class=\"e\">PHP API </td><td class=\"v\">20190902 </td></tr>\n<tr><td class=\"e\">PHP Extension </td><td class=\"v\">20190902 </td></tr>\n<tr><td class=\"e\">Zend Extension </td><td class=\"v\">320190902 </td></tr>\n<tr><td class=\"e\">Zend Extension Build </td><td class=\"v\">API320190902,NTS </td></tr>\n<tr><td class=\"e\">PHP Extension Build </td><td class=\"v\">API20190902,NTS </td></tr>\n<tr><td class=\"e\">Debug Build </td><td class=\"v\">no </td></tr>\n<tr><td class=\"e\">Thread Safety </td><td class=\"v\">disabled </td></tr>\n<tr><td class=\"e\">Zend Signal Handling </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Zend Memory Manager </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Zend Multibyte Support </td><td class=\"v\">provided by mbstring </td></tr>\n<tr><td class=\"e\">IPv6 Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">DTrace Support </td><td class=\"v\">disabled </td></tr>\n<tr><td class=\"e\">Registered PHP Streams</td><td class=\"v\">https, ftps, compress.zlib, php, file, glob, data, http, ftp, phar, zip</td></tr>\n<tr><td class=\"e\">Registered Stream Socket Transports</td><td class=\"v\">tcp, udp, unix, udg, ssl, tls, tlsv1.0, tlsv1.1, tlsv1.2, tlsv1.3</td></tr>\n<tr><td class=\"e\">Registered Stream Filters</td><td class=\"v\">zlib.*, convert.iconv.*, string.rot13, string.toupper, string.tolower, string.strip_tags, convert.*, consumed, dechunk, chunk</td></tr>\n</table>\n<table>\n<tr class=\"v\"><td>\n<a href=\"http://www.zend.com/\"><img border=\"0\" src=\"data:image/png;base64,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\" alt=\"Zend logo\" /></a>\nThis program makes use of the Zend Scripting Language Engine:<br />Zend&nbsp;Engine&nbsp;v3.4.0,&nbsp;Copyright&nbsp;(c)&nbsp;Zend&nbsp;Technologies<br />&nbsp;&nbsp;&nbsp;&nbsp;with&nbsp;Zend&nbsp;OPcache&nbsp;v7.4.29,&nbsp;Copyright&nbsp;(c),&nbsp;by&nbsp;Zend&nbsp;Technologies<br /></td></tr>\n</table>\n<hr />\n<h1>Configuration</h1>\n<h2><a name=\"module_apache2handler\">apache2handler</a></h2>\n<table>\n<tr><td class=\"e\">Apache Version </td><td class=\"v\">Apache/2.4.53 (Debian) </td></tr>\n<tr><td class=\"e\">Apache API Version </td><td class=\"v\">20120211 </td></tr>\n<tr><td class=\"e\">Server Administrator </td><td class=\"v\">webmaster@localhost </td></tr>\n<tr><td class=\"e\">Hostname:Port </td><td class=\"v\">172.19.0.3:80 </td></tr>\n<tr><td class=\"e\">User/Group </td><td class=\"v\">www-data(33)/33 </td></tr>\n<tr><td class=\"e\">Max Requests </td><td class=\"v\">Per Child: 0 - Keep Alive: on - Max Per Connection: 100 </td></tr>\n<tr><td class=\"e\">Timeouts </td><td class=\"v\">Connection: 300 - Keep-Alive: 5 </td></tr>\n<tr><td class=\"e\">Virtual Server </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">Server Root </td><td class=\"v\">/etc/apache2 </td></tr>\n<tr><td class=\"e\">Loaded Modules </td><td class=\"v\">core mod_so mod_watchdog http_core mod_log_config mod_logio mod_version mod_unixd mod_access_compat mod_alias mod_auth_basic mod_authn_core mod_authn_file mod_authz_core mod_authz_host mod_authz_user mod_autoindex mod_deflate mod_dir mod_env mod_filter mod_mime prefork mod_negotiation mod_php7 mod_reqtimeout mod_rewrite mod_setenvif mod_status </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">engine</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">last_modified</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">xbithack</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n</table>\n<h2>Apache Environment</h2>\n<table>\n<tr class=\"h\"><th>Variable</th><th>Value</th></tr>\n<tr><td class=\"e\">BASE </td><td class=\"v\">/adminop </td></tr>\n<tr><td class=\"e\">HTTP_MOD_REWRITE </td><td class=\"v\">On </td></tr>\n<tr><td class=\"e\">HTTP_COOKIE </td><td class=\"v\">PHPSESSID=f76d56e56f7b643e7a1405b28ec34094; PrestaShop-b495097bf03a2b246a17e22e09a4dd34=def50200f5cc9d65db8df715e87f7eac03ad619728e89d04dce5dbb16035301a99f222f77b6f75e4dcb8a1e54f331618eaa86598c8585b4d902cf0f8e84ebad12d5dde92a4e6efd40a2c9d56e9feada69d3106a074a1efea17be577a14cf039f2e8664d70a24453b49c805b80b30bbf0446b33ef31a450518f973d0fd838372eb872f0277d623a99b30ba925ac006b991b77b0773f22ef5a2aef1e5e2484f759141fe6549787de00941255fe347a4a00fbaa0cebd959f5b8aaf031d2736825a936cf772aef0110411bdd060355b58cad229f9987c5fd2e40ff376b2bf1074b04c2a3a6a3c188723c926fb682daf0b98d9d9fed32; PrestaShop-d3ba7e0d7f65d6f0f5b141157cb26af3=def50200e0689194bc8da6bd8764673bbf01936bea8587f2fdbac8856a735fd1ecd7e516d446b38aefc9b3a636cd4a008ce2d98a7b6cdfe3372fca2d83b4c313bc1697be158ae08e33b7919bf6923344fc6797328ad16edd773d334b3a8614cb1dca88f9ed34b145190984dfc7a42a413fee67d24b7f3b0909353d521917258a3ec8110d1a69d40006294d1af9a99e537ba6ac9f670c5c71af3c267f5f4592203be4723f983c3232b8aec1a8030bd445d14dba244df37577d262ac5128755e2e1fb4dd8f711fe6c92a548068ad9b51ce5a66e923e59a293286f51d6dac1123ed26573538a14dbbe74d0df2c216a60586e931f6c041ad10c10e69053db489b8ebf73ae32392a8542cea451a8723d97ae229586c1ffcdf404d1eb7ac4e9aa887046bc365649f2b6b02577f27464c4c049934afed8f2b79a2a97252061b18623293c2d1048cafdeba341d2808602c277b9732de1ad8c89b709378266e7e56aa939d3429a0d7a3fad6bfd0ac03a334d9b8bb8cc5c960a9f81ca2871660c96136fee85282522f8ccb113ec6c62389ea8a2098fbf31a28f58b4e7896444aae494f6ed319337ac1fb0d2ef97b882eb81c20b6de04c3b4d3a01725404f80f0e0499588cc049a090c67ac324b57bb923538dbf211ecc659e8eea7908f43; PHPSESSID=d9fe09b0352502a628e1de3d23519c6e; PrestaShop-d3ba7e0d7f65d6f0f5b141157cb26af3=def502006c24c4323383b5fb1a7898f47953a85f442e2e5d03a048cb8e05b9bea8921bdb2c15161cddf015307f6368786cb97633b5e5e5e8a53afc88fd328ee0ed24b110dcfcb0f9ca0de5a79f13664bbb3dd18bcedbbcb9970be27e8e2c9f6ca6b18cedf266741cb2dc54c6506bb54ce6132d3344b9e597b6c2dcca9c01d32dd174f9b043fb36155d967bc1d3aa3842e8a4d768968adfcf4022dd8897 </td></tr>\n<tr><td class=\"e\">CONTENT_TYPE </td><td class=\"v\">application/json </td></tr>\n<tr><td class=\"e\">HTTP_USER_AGENT </td><td class=\"v\">PostmanRuntime/7.32.3 </td></tr>\n<tr><td class=\"e\">HTTP_ACCEPT </td><td class=\"v\">*/* </td></tr>\n<tr><td class=\"e\">HTTP_POSTMAN_TOKEN </td><td class=\"v\">da2f709f-9f79-4c5f-95c1-bb390c9cefe2 </td></tr>\n<tr><td class=\"e\">HTTP_HOST </td><td class=\"v\">localhost:8080 </td></tr>\n<tr><td class=\"e\">HTTP_ACCEPT_ENCODING </td><td class=\"v\">gzip, deflate, br </td></tr>\n<tr><td class=\"e\">HTTP_CONNECTION </td><td class=\"v\">keep-alive </td></tr>\n<tr><td class=\"e\">CONTENT_LENGTH </td><td class=\"v\">31 </td></tr>\n<tr><td class=\"e\">PATH </td><td class=\"v\">/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin </td></tr>\n<tr><td class=\"e\">SERVER_SIGNATURE </td><td class=\"v\">&lt;address&gt;Apache/2.4.53 (Debian) Server at localhost Port 8080&lt;/address&gt;\n </td></tr>\n<tr><td class=\"e\">SERVER_SOFTWARE </td><td class=\"v\">Apache/2.4.53 (Debian) </td></tr>\n<tr><td class=\"e\">SERVER_NAME </td><td class=\"v\">localhost </td></tr>\n<tr><td class=\"e\">SERVER_ADDR </td><td class=\"v\">172.19.0.3 </td></tr>\n<tr><td class=\"e\">SERVER_PORT </td><td class=\"v\">8080 </td></tr>\n<tr><td class=\"e\">REMOTE_ADDR </td><td class=\"v\">172.19.0.1 </td></tr>\n<tr><td class=\"e\">DOCUMENT_ROOT </td><td class=\"v\">/var/www/html </td></tr>\n<tr><td class=\"e\">REQUEST_SCHEME </td><td class=\"v\">http </td></tr>\n<tr><td class=\"e\">CONTEXT_PREFIX </td><td class=\"v\"><i>no value</i> </td></tr>\n<tr><td class=\"e\">CONTEXT_DOCUMENT_ROOT </td><td class=\"v\">/var/www/html </td></tr>\n<tr><td class=\"e\">SERVER_ADMIN </td><td class=\"v\">webmaster@localhost </td></tr>\n<tr><td class=\"e\">SCRIPT_FILENAME </td><td class=\"v\">/var/www/html/adminop/index.php </td></tr>\n<tr><td class=\"e\">REMOTE_PORT </td><td class=\"v\">38878 </td></tr>\n<tr><td class=\"e\">GATEWAY_INTERFACE </td><td class=\"v\">CGI/1.1 </td></tr>\n<tr><td class=\"e\">SERVER_PROTOCOL </td><td class=\"v\">HTTP/1.1 </td></tr>\n<tr><td class=\"e\">REQUEST_METHOD </td><td class=\"v\">POST </td></tr>\n<tr><td class=\"e\">QUERY_STRING </td><td class=\"v\">_token=BVlnjHYsRBwhFUAUkiJtbafevSEKqDJ-hTLDB0X8Xi4 </td></tr>\n<tr><td class=\"e\">REQUEST_URI </td><td class=\"v\">/adminop/index.php/modules/webpay/plugin/execute?_token=BVlnjHYsRBwhFUAUkiJtbafevSEKqDJ-hTLDB0X8Xi4 </td></tr>\n<tr><td class=\"e\">SCRIPT_NAME </td><td class=\"v\">/adminop/index.php </td></tr>\n<tr><td class=\"e\">PATH_INFO </td><td class=\"v\">/modules/webpay/plugin/execute </td></tr>\n<tr><td class=\"e\">PATH_TRANSLATED </td><td class=\"v\">redirect:/index.php/execute </td></tr>\n</table>\n<h2>HTTP Headers Information</h2>\n<table>\n<tr class=\"h\"><th colspan=\"2\">HTTP Request Headers</th></tr>\n<tr><td class=\"e\">HTTP Request </td><td class=\"v\">POST /adminop/index.php/modules/webpay/plugin/execute?_token=BVlnjHYsRBwhFUAUkiJtbafevSEKqDJ-hTLDB0X8Xi4 HTTP/1.1 </td></tr>\n<tr><td class=\"e\">Cookie </td><td class=\"v\">PHPSESSID=f76d56e56f7b643e7a1405b28ec34094; PrestaShop-b495097bf03a2b246a17e22e09a4dd34=def50200f5cc9d65db8df715e87f7eac03ad619728e89d04dce5dbb16035301a99f222f77b6f75e4dcb8a1e54f331618eaa86598c8585b4d902cf0f8e84ebad12d5dde92a4e6efd40a2c9d56e9feada69d3106a074a1efea17be577a14cf039f2e8664d70a24453b49c805b80b30bbf0446b33ef31a450518f973d0fd838372eb872f0277d623a99b30ba925ac006b991b77b0773f22ef5a2aef1e5e2484f759141fe6549787de00941255fe347a4a00fbaa0cebd959f5b8aaf031d2736825a936cf772aef0110411bdd060355b58cad229f9987c5fd2e40ff376b2bf1074b04c2a3a6a3c188723c926fb682daf0b98d9d9fed32; PrestaShop-d3ba7e0d7f65d6f0f5b141157cb26af3=def50200e0689194bc8da6bd8764673bbf01936bea8587f2fdbac8856a735fd1ecd7e516d446b38aefc9b3a636cd4a008ce2d98a7b6cdfe3372fca2d83b4c313bc1697be158ae08e33b7919bf6923344fc6797328ad16edd773d334b3a8614cb1dca88f9ed34b145190984dfc7a42a413fee67d24b7f3b0909353d521917258a3ec8110d1a69d40006294d1af9a99e537ba6ac9f670c5c71af3c267f5f4592203be4723f983c3232b8aec1a8030bd445d14dba244df37577d262ac5128755e2e1fb4dd8f711fe6c92a548068ad9b51ce5a66e923e59a293286f51d6dac1123ed26573538a14dbbe74d0df2c216a60586e931f6c041ad10c10e69053db489b8ebf73ae32392a8542cea451a8723d97ae229586c1ffcdf404d1eb7ac4e9aa887046bc365649f2b6b02577f27464c4c049934afed8f2b79a2a97252061b18623293c2d1048cafdeba341d2808602c277b9732de1ad8c89b709378266e7e56aa939d3429a0d7a3fad6bfd0ac03a334d9b8bb8cc5c960a9f81ca2871660c96136fee85282522f8ccb113ec6c62389ea8a2098fbf31a28f58b4e7896444aae494f6ed319337ac1fb0d2ef97b882eb81c20b6de04c3b4d3a01725404f80f0e0499588cc049a090c67ac324b57bb923538dbf211ecc659e8eea7908f43; PHPSESSID=d9fe09b0352502a628e1de3d23519c6e; PrestaShop-d3ba7e0d7f65d6f0f5b141157cb26af3=def502006c24c4323383b5fb1a7898f47953a85f442e2e5d03a048cb8e05b9bea8921bdb2c15161cddf015307f6368786cb97633b5e5e5e8a53afc88fd328ee0ed24b110dcfcb0f9ca0de5a79f13664bbb3dd18bcedbbcb9970be27e8e2c9f6ca6b18cedf266741cb2dc54c6506bb54ce6132d3344b9e597b6c2dcca9c01d32dd174f9b043fb36155d967bc1d3aa3842e8a4d768968adfcf4022dd8897 </td></tr>\n<tr><td class=\"e\">Content-Type </td><td class=\"v\">application/json </td></tr>\n<tr><td class=\"e\">User-Agent </td><td class=\"v\">PostmanRuntime/7.32.3 </td></tr>\n<tr><td class=\"e\">Accept </td><td class=\"v\">*/* </td></tr>\n<tr><td class=\"e\">Postman-Token </td><td class=\"v\">da2f709f-9f79-4c5f-95c1-bb390c9cefe2 </td></tr>\n<tr><td class=\"e\">Host </td><td class=\"v\">localhost:8080 </td></tr>\n<tr><td class=\"e\">Accept-Encoding </td><td class=\"v\">gzip, deflate, br </td></tr>\n<tr><td class=\"e\">Connection </td><td class=\"v\">keep-alive </td></tr>\n<tr><td class=\"e\">Content-Length </td><td class=\"v\">31 </td></tr>\n<tr class=\"h\"><th colspan=\"2\">HTTP Response Headers</th></tr>\n</table>\n<h2><a name=\"module_bcmath\">bcmath</a></h2>\n<table>\n<tr><td class=\"e\">BCMath support </td><td class=\"v\">enabled </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">bcmath.scale</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n</table>\n<h2><a name=\"module_core\">Core</a></h2>\n<table>\n<tr><td class=\"e\">PHP Version </td><td class=\"v\">7.4.29 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">allow_url_fopen</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">allow_url_include</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">arg_separator.input</td><td class=\"v\">&amp;</td><td class=\"v\">&amp;</td></tr>\n<tr><td class=\"e\">arg_separator.output</td><td class=\"v\">&amp;</td><td class=\"v\">&amp;</td></tr>\n<tr><td class=\"e\">auto_append_file</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">auto_globals_jit</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">auto_prepend_file</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">browscap</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">default_charset</td><td class=\"v\">utf-8</td><td class=\"v\">UTF-8</td></tr>\n<tr><td class=\"e\">default_mimetype</td><td class=\"v\">text/html</td><td class=\"v\">text/html</td></tr>\n<tr><td class=\"e\">disable_classes</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">disable_functions</td><td class=\"v\">pcntl_alarm,pcntl_fork,pcntl_waitpid,pcntl_wait,pcntl_wifexited,pcntl_wifstopped,pcntl_wifsignaled,pcntl_wexitstatus,pcntl_wtermsig,pcntl_wstopsig,pcntl_signal,pcntl_signal_dispatch,pcntl_get_last_error,pcntl_strerror,pcntl_sigprocmask,pcntl_sigwaitinfo,pcntl_sigtimedwait,pcntl_exec,pcntl_getpriority,pcntl_setpriority,</td><td class=\"v\">pcntl_alarm,pcntl_fork,pcntl_waitpid,pcntl_wait,pcntl_wifexited,pcntl_wifstopped,pcntl_wifsignaled,pcntl_wexitstatus,pcntl_wtermsig,pcntl_wstopsig,pcntl_signal,pcntl_signal_dispatch,pcntl_get_last_error,pcntl_strerror,pcntl_sigprocmask,pcntl_sigwaitinfo,pcntl_sigtimedwait,pcntl_exec,pcntl_getpriority,pcntl_setpriority,</td></tr>\n<tr><td class=\"e\">display_errors</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">display_startup_errors</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">doc_root</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">docref_ext</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">docref_root</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">enable_dl</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">enable_post_data_reading</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">error_append_string</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">error_log</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">error_prepend_string</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">error_reporting</td><td class=\"v\">32767</td><td class=\"v\">22527</td></tr>\n<tr><td class=\"e\">expose_php</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">extension_dir</td><td class=\"v\">/usr/local/lib/php/extensions/no-debug-non-zts-20190902</td><td class=\"v\">/usr/local/lib/php/extensions/no-debug-non-zts-20190902</td></tr>\n<tr><td class=\"e\">file_uploads</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">hard_timeout</td><td class=\"v\">2</td><td class=\"v\">2</td></tr>\n<tr><td class=\"e\">highlight.comment</td><td class=\"v\"><font style=\"color: #FF8000\">#FF8000</font></td><td class=\"v\"><font style=\"color: #FF8000\">#FF8000</font></td></tr>\n<tr><td class=\"e\">highlight.default</td><td class=\"v\"><font style=\"color: #0000BB\">#0000BB</font></td><td class=\"v\"><font style=\"color: #0000BB\">#0000BB</font></td></tr>\n<tr><td class=\"e\">highlight.html</td><td class=\"v\"><font style=\"color: #000000\">#000000</font></td><td class=\"v\"><font style=\"color: #000000\">#000000</font></td></tr>\n<tr><td class=\"e\">highlight.keyword</td><td class=\"v\"><font style=\"color: #007700\">#007700</font></td><td class=\"v\"><font style=\"color: #007700\">#007700</font></td></tr>\n<tr><td class=\"e\">highlight.string</td><td class=\"v\"><font style=\"color: #DD0000\">#DD0000</font></td><td class=\"v\"><font style=\"color: #DD0000\">#DD0000</font></td></tr>\n<tr><td class=\"e\">html_errors</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">ignore_repeated_errors</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">ignore_repeated_source</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">ignore_user_abort</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">implicit_flush</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">include_path</td><td class=\"v\">/var/www/html/vendor/pear/pear_exception:/var/www/html/vendor/pear/console_getopt:/var/www/html/vendor/pear/pear-core-minimal/src:/var/www/html/vendor/pear/archive_tar:.:/usr/local/lib/php</td><td class=\"v\">.:/usr/local/lib/php</td></tr>\n<tr><td class=\"e\">input_encoding</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">internal_encoding</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">log_errors</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">log_errors_max_len</td><td class=\"v\">1024</td><td class=\"v\">1024</td></tr>\n<tr><td class=\"e\">mail.add_x_header</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">mail.force_extra_parameters</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">mail.log</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">max_execution_time</td><td class=\"v\">30</td><td class=\"v\">30</td></tr>\n<tr><td class=\"e\">max_file_uploads</td><td class=\"v\">20</td><td class=\"v\">20</td></tr>\n<tr><td class=\"e\">max_input_nesting_level</td><td class=\"v\">64</td><td class=\"v\">64</td></tr>\n<tr><td class=\"e\">max_input_time</td><td class=\"v\">60</td><td class=\"v\">60</td></tr>\n<tr><td class=\"e\">max_input_vars</td><td class=\"v\">20000</td><td class=\"v\">20000</td></tr>\n<tr><td class=\"e\">memory_limit</td><td class=\"v\">256M</td><td class=\"v\">256M</td></tr>\n<tr><td class=\"e\">open_basedir</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">output_buffering</td><td class=\"v\">4096</td><td class=\"v\">4096</td></tr>\n<tr><td class=\"e\">output_encoding</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">output_handler</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">post_max_size</td><td class=\"v\">20M</td><td class=\"v\">20M</td></tr>\n<tr><td class=\"e\">precision</td><td class=\"v\">14</td><td class=\"v\">14</td></tr>\n<tr><td class=\"e\">realpath_cache_size</td><td class=\"v\">4096K</td><td class=\"v\">4096K</td></tr>\n<tr><td class=\"e\">realpath_cache_ttl</td><td class=\"v\">600</td><td class=\"v\">600</td></tr>\n<tr><td class=\"e\">register_argc_argv</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">report_memleaks</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">report_zend_debug</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">request_order</td><td class=\"v\">GP</td><td class=\"v\">GP</td></tr>\n<tr><td class=\"e\">sendmail_from</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">sendmail_path</td><td class=\"v\">/usr/sbin/sendmail&nbsp;-t&nbsp;-i</td><td class=\"v\">/usr/sbin/sendmail&nbsp;-t&nbsp;-i</td></tr>\n<tr><td class=\"e\">serialize_precision</td><td class=\"v\">17</td><td class=\"v\">17</td></tr>\n<tr><td class=\"e\">short_open_tag</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">SMTP</td><td class=\"v\">localhost</td><td class=\"v\">localhost</td></tr>\n<tr><td class=\"e\">smtp_port</td><td class=\"v\">25</td><td class=\"v\">25</td></tr>\n<tr><td class=\"e\">sys_temp_dir</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">syslog.facility</td><td class=\"v\">LOG_USER</td><td class=\"v\">LOG_USER</td></tr>\n<tr><td class=\"e\">syslog.filter</td><td class=\"v\">no-ctrl</td><td class=\"v\">no-ctrl</td></tr>\n<tr><td class=\"e\">syslog.ident</td><td class=\"v\">php</td><td class=\"v\">php</td></tr>\n<tr><td class=\"e\">track_errors</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">unserialize_callback_func</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">upload_max_filesize</td><td class=\"v\">20M</td><td class=\"v\">20M</td></tr>\n<tr><td class=\"e\">upload_tmp_dir</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">user_dir</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">user_ini.cache_ttl</td><td class=\"v\">300</td><td class=\"v\">300</td></tr>\n<tr><td class=\"e\">user_ini.filename</td><td class=\"v\">.user.ini</td><td class=\"v\">.user.ini</td></tr>\n<tr><td class=\"e\">variables_order</td><td class=\"v\">GPCS</td><td class=\"v\">GPCS</td></tr>\n<tr><td class=\"e\">xmlrpc_error_number</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">xmlrpc_errors</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">zend.assertions</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">zend.detect_unicode</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">zend.enable_gc</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">zend.exception_ignore_args</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">zend.multibyte</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">zend.script_encoding</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">zend.signal_check</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n</table>\n<h2><a name=\"module_ctype\">ctype</a></h2>\n<table>\n<tr><td class=\"e\">ctype functions </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_curl\">curl</a></h2>\n<table>\n<tr><td class=\"e\">cURL support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">cURL Information </td><td class=\"v\">7.74.0 </td></tr>\n<tr><td class=\"e\">Age </td><td class=\"v\">7 </td></tr>\n<tr><td class=\"e\">Features </td></tr>\n<tr><td class=\"e\">AsynchDNS </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">CharConv </td><td class=\"v\">No </td></tr>\n<tr><td class=\"e\">Debug </td><td class=\"v\">No </td></tr>\n<tr><td class=\"e\">GSS-Negotiate </td><td class=\"v\">No </td></tr>\n<tr><td class=\"e\">IDN </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">IPv6 </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">krb4 </td><td class=\"v\">No </td></tr>\n<tr><td class=\"e\">Largefile </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">libz </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">NTLM </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">NTLMWB </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">SPNEGO </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">SSL </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">SSPI </td><td class=\"v\">No </td></tr>\n<tr><td class=\"e\">TLS-SRP </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">HTTP2 </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">GSSAPI </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">KERBEROS5 </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">UNIX_SOCKETS </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">PSL </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">HTTPS_PROXY </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">MULTI_SSL </td><td class=\"v\">No </td></tr>\n<tr><td class=\"e\">BROTLI </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">Protocols </td><td class=\"v\">dict, file, ftp, ftps, gopher, http, https, imap, imaps, ldap, ldaps, mqtt, pop3, pop3s, rtmp, rtsp, scp, sftp, smb, smbs, smtp, smtps, telnet, tftp </td></tr>\n<tr><td class=\"e\">Host </td><td class=\"v\">x86_64-pc-linux-gnu </td></tr>\n<tr><td class=\"e\">SSL Version </td><td class=\"v\">OpenSSL/1.1.1n </td></tr>\n<tr><td class=\"e\">ZLib Version </td><td class=\"v\">1.2.11 </td></tr>\n<tr><td class=\"e\">libSSH Version </td><td class=\"v\">libssh2/1.9.0 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">curl.cainfo</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n</table>\n<h2><a name=\"module_date\">date</a></h2>\n<table>\n<tr><td class=\"e\">date/time support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">timelib version </td><td class=\"v\">2018.04 </td></tr>\n<tr><td class=\"e\">&quot;Olson&quot; Timezone Database Version </td><td class=\"v\">2022.1 </td></tr>\n<tr><td class=\"e\">Timezone Database </td><td class=\"v\">internal </td></tr>\n<tr><td class=\"e\">Default timezone </td><td class=\"v\">Europe/Paris </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">date.default_latitude</td><td class=\"v\">31.7667</td><td class=\"v\">31.7667</td></tr>\n<tr><td class=\"e\">date.default_longitude</td><td class=\"v\">35.2333</td><td class=\"v\">35.2333</td></tr>\n<tr><td class=\"e\">date.sunrise_zenith</td><td class=\"v\">90.583333</td><td class=\"v\">90.583333</td></tr>\n<tr><td class=\"e\">date.sunset_zenith</td><td class=\"v\">90.583333</td><td class=\"v\">90.583333</td></tr>\n<tr><td class=\"e\">date.timezone</td><td class=\"v\">Europe/Paris</td><td class=\"v\">Europe/Paris</td></tr>\n</table>\n<h2><a name=\"module_dom\">dom</a></h2>\n<table>\n<tr><td class=\"e\">DOM/XML </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">DOM/XML API Version </td><td class=\"v\">20031129 </td></tr>\n<tr><td class=\"e\">libxml Version </td><td class=\"v\">2.9.10 </td></tr>\n<tr><td class=\"e\">HTML Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">XPath Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">XPointer Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Schema Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">RelaxNG Support </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_fileinfo\">fileinfo</a></h2>\n<table>\n<tr><td class=\"e\">fileinfo support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">libmagic </td><td class=\"v\">537 </td></tr>\n</table>\n<h2><a name=\"module_filter\">filter</a></h2>\n<table>\n<tr><td class=\"e\">Input Validation and Filtering </td><td class=\"v\">enabled </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">filter.default</td><td class=\"v\">unsafe_raw</td><td class=\"v\">unsafe_raw</td></tr>\n<tr><td class=\"e\">filter.default_flags</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n</table>\n<h2><a name=\"module_ftp\">ftp</a></h2>\n<table>\n<tr><td class=\"e\">FTP support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">FTPS support </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_gd\">gd</a></h2>\n<table>\n<tr><td class=\"e\">GD Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">GD Version </td><td class=\"v\">bundled (2.1.0 compatible) </td></tr>\n<tr><td class=\"e\">FreeType Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">FreeType Linkage </td><td class=\"v\">with freetype </td></tr>\n<tr><td class=\"e\">FreeType Version </td><td class=\"v\">2.10.4 </td></tr>\n<tr><td class=\"e\">GIF Read Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">GIF Create Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">JPEG Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">libJPEG Version </td><td class=\"v\">6b </td></tr>\n<tr><td class=\"e\">PNG Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">libPNG Version </td><td class=\"v\">1.6.37 </td></tr>\n<tr><td class=\"e\">WBMP Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">XBM Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">WebP Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">BMP Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">TGA Read Support </td><td class=\"v\">enabled </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">gd.jpeg_ignore_warning</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n</table>\n<h2><a name=\"module_hash\">hash</a></h2>\n<table>\n<tr><td class=\"e\">hash support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Hashing Engines </td><td class=\"v\">md2 md4 md5 sha1 sha224 sha256 sha384 sha512/224 sha512/256 sha512 sha3-224 sha3-256 sha3-384 sha3-512 ripemd128 ripemd160 ripemd256 ripemd320 whirlpool tiger128,3 tiger160,3 tiger192,3 tiger128,4 tiger160,4 tiger192,4 snefru snefru256 gost gost-crypto adler32 crc32 crc32b crc32c fnv132 fnv1a32 fnv164 fnv1a64 joaat haval128,3 haval160,3 haval192,3 haval224,3 haval256,3 haval128,4 haval160,4 haval192,4 haval224,4 haval256,4 haval128,5 haval160,5 haval192,5 haval224,5 haval256,5  </td></tr>\n</table>\n<table>\n<tr><td class=\"e\">MHASH support </td><td class=\"v\">Enabled </td></tr>\n<tr><td class=\"e\">MHASH API Version </td><td class=\"v\">Emulated Support </td></tr>\n</table>\n<h2><a name=\"module_iconv\">iconv</a></h2>\n<table>\n<tr><td class=\"e\">iconv support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">iconv implementation </td><td class=\"v\">glibc </td></tr>\n<tr><td class=\"e\">iconv library version </td><td class=\"v\">2.31 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">iconv.input_encoding</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">iconv.internal_encoding</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">iconv.output_encoding</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n</table>\n<h2><a name=\"module_intl\">intl</a></h2>\n<table>\n<tr class=\"h\"><th>Internationalization support</th><th>enabled</th></tr>\n<tr><td class=\"e\">ICU version </td><td class=\"v\">67.1 </td></tr>\n<tr><td class=\"e\">ICU Data version </td><td class=\"v\">67.1 </td></tr>\n<tr><td class=\"e\">ICU TZData version </td><td class=\"v\">2019c </td></tr>\n<tr><td class=\"e\">ICU Unicode version </td><td class=\"v\">13.0 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">intl.default_locale</td><td class=\"v\">es-ES</td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">intl.error_level</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">intl.use_exceptions</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n</table>\n<h2><a name=\"module_json\">json</a></h2>\n<table>\n<tr><td class=\"e\">json support </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_libxml\">libxml</a></h2>\n<table>\n<tr><td class=\"e\">libXML support </td><td class=\"v\">active </td></tr>\n<tr><td class=\"e\">libXML Compiled Version </td><td class=\"v\">2.9.10 </td></tr>\n<tr><td class=\"e\">libXML Loaded Version </td><td class=\"v\">20910 </td></tr>\n<tr><td class=\"e\">libXML streams </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_mbstring\">mbstring</a></h2>\n<table>\n<tr><td class=\"e\">Multibyte Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Multibyte string engine </td><td class=\"v\">libmbfl </td></tr>\n<tr><td class=\"e\">HTTP input encoding translation </td><td class=\"v\">disabled </td></tr>\n<tr><td class=\"e\">libmbfl version </td><td class=\"v\">1.3.2 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>mbstring extension makes use of \"streamable kanji code filter and converter\", which is distributed under the GNU Lesser General Public License version 2.1.</th></tr>\n</table>\n<table>\n<tr><td class=\"e\">Multibyte (japanese) regex support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Multibyte regex (oniguruma) version </td><td class=\"v\">6.9.6 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">mbstring.detect_order</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">mbstring.encoding_translation</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">mbstring.func_overload</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">mbstring.http_input</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">mbstring.http_output</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">mbstring.http_output_conv_mimetypes</td><td class=\"v\">^(text/|application/xhtml\\+xml)</td><td class=\"v\">^(text/|application/xhtml\\+xml)</td></tr>\n<tr><td class=\"e\">mbstring.internal_encoding</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">mbstring.language</td><td class=\"v\">neutral</td><td class=\"v\">neutral</td></tr>\n<tr><td class=\"e\">mbstring.regex_retry_limit</td><td class=\"v\">1000000</td><td class=\"v\">1000000</td></tr>\n<tr><td class=\"e\">mbstring.regex_stack_limit</td><td class=\"v\">100000</td><td class=\"v\">100000</td></tr>\n<tr><td class=\"e\">mbstring.strict_detection</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">mbstring.substitute_character</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n</table>\n<h2><a name=\"module_mysqlnd\">mysqlnd</a></h2>\n<table>\n<tr class=\"h\"><th>mysqlnd</th><th>enabled</th></tr>\n<tr><td class=\"e\">Version </td><td class=\"v\">mysqlnd 7.4.29 </td></tr>\n<tr><td class=\"e\">Compression </td><td class=\"v\">supported </td></tr>\n<tr><td class=\"e\">core SSL </td><td class=\"v\">supported </td></tr>\n<tr><td class=\"e\">extended SSL </td><td class=\"v\">supported </td></tr>\n<tr><td class=\"e\">Command buffer size </td><td class=\"v\">4096 </td></tr>\n<tr><td class=\"e\">Read buffer size </td><td class=\"v\">32768 </td></tr>\n<tr><td class=\"e\">Read timeout </td><td class=\"v\">86400 </td></tr>\n<tr><td class=\"e\">Collecting statistics </td><td class=\"v\">Yes </td></tr>\n<tr><td class=\"e\">Collecting memory statistics </td><td class=\"v\">No </td></tr>\n<tr><td class=\"e\">Tracing </td><td class=\"v\">n/a </td></tr>\n<tr><td class=\"e\">Loaded plugins </td><td class=\"v\">mysqlnd,debug_trace,auth_plugin_mysql_native_password,auth_plugin_mysql_clear_password,auth_plugin_caching_sha2_password,auth_plugin_sha256_password </td></tr>\n<tr><td class=\"e\">API Extensions </td><td class=\"v\">pdo_mysql </td></tr>\n</table>\n<h2><a name=\"module_openssl\">openssl</a></h2>\n<table>\n<tr><td class=\"e\">OpenSSL support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">OpenSSL Library Version </td><td class=\"v\">OpenSSL 1.1.1n  15 Mar 2022 </td></tr>\n<tr><td class=\"e\">OpenSSL Header Version </td><td class=\"v\">OpenSSL 1.1.1n  15 Mar 2022 </td></tr>\n<tr><td class=\"e\">Openssl default config </td><td class=\"v\">/usr/lib/ssl/openssl.cnf </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">openssl.cafile</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">openssl.capath</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n</table>\n<h2><a name=\"module_pcre\">pcre</a></h2>\n<table>\n<tr><td class=\"e\">PCRE (Perl Compatible Regular Expressions) Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">PCRE Library Version </td><td class=\"v\">10.35 2020-05-09 </td></tr>\n<tr><td class=\"e\">PCRE Unicode Version </td><td class=\"v\">13.0.0 </td></tr>\n<tr><td class=\"e\">PCRE JIT Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">PCRE JIT Target </td><td class=\"v\">x86 64bit (little endian + unaligned) </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">pcre.backtrack_limit</td><td class=\"v\">1000000</td><td class=\"v\">1000000</td></tr>\n<tr><td class=\"e\">pcre.jit</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">pcre.recursion_limit</td><td class=\"v\">100000</td><td class=\"v\">100000</td></tr>\n</table>\n<h2><a name=\"module_pdo\">PDO</a></h2>\n<table>\n<tr class=\"h\"><th>PDO support</th><th>enabled</th></tr>\n<tr><td class=\"e\">PDO drivers </td><td class=\"v\">sqlite, mysql </td></tr>\n</table>\n<h2><a name=\"module_pdo_mysql\">pdo_mysql</a></h2>\n<table>\n<tr class=\"h\"><th>PDO Driver for MySQL</th><th>enabled</th></tr>\n<tr><td class=\"e\">Client API version </td><td class=\"v\">mysqlnd 7.4.29 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">pdo_mysql.default_socket</td><td class=\"v\">/var/run/mysqld/mysqld.sock</td><td class=\"v\">/var/run/mysqld/mysqld.sock</td></tr>\n</table>\n<h2><a name=\"module_pdo_sqlite\">pdo_sqlite</a></h2>\n<table>\n<tr class=\"h\"><th>PDO Driver for SQLite 3.x</th><th>enabled</th></tr>\n<tr><td class=\"e\">SQLite Library </td><td class=\"v\">3.34.1 </td></tr>\n</table>\n<h2><a name=\"module_phar\">Phar</a></h2>\n<table>\n<tr class=\"h\"><th>Phar: PHP Archive support</th><th>enabled</th></tr>\n<tr><td class=\"e\">Phar API version </td><td class=\"v\">1.1.1 </td></tr>\n<tr><td class=\"e\">Phar-based phar archives </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Tar-based phar archives </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">ZIP-based phar archives </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">gzip compression </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">bzip2 compression </td><td class=\"v\">disabled (install ext/bz2) </td></tr>\n<tr><td class=\"e\">Native OpenSSL support </td><td class=\"v\">enabled </td></tr>\n</table>\n<table>\n<tr class=\"v\"><td>\nPhar based on pear/PHP_Archive, original concept by Davey Shafik.<br />Phar fully realized by Gregory Beaver and Marcus Boerger.<br />Portions of tar implementation Copyright (c) 2003-2009 Tim Kientzle.</td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">phar.cache_list</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">phar.readonly</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">phar.require_hash</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n</table>\n<h2><a name=\"module_posix\">posix</a></h2>\n<table>\n<tr><td class=\"e\">POSIX support </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_reflection\">Reflection</a></h2>\n<table>\n<tr><td class=\"e\">Reflection </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_session\">session</a></h2>\n<table>\n<tr><td class=\"e\">Session Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Registered save handlers </td><td class=\"v\">files user  </td></tr>\n<tr><td class=\"e\">Registered serializer handlers </td><td class=\"v\">php_serialize php php_binary  </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">session.auto_start</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">session.cache_expire</td><td class=\"v\">0</td><td class=\"v\">180</td></tr>\n<tr><td class=\"e\">session.cache_limiter</td><td class=\"v\">0</td><td class=\"v\">nocache</td></tr>\n<tr><td class=\"e\">session.cookie_domain</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">session.cookie_httponly</td><td class=\"v\">1</td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">session.cookie_lifetime</td><td class=\"v\">1695693104</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">session.cookie_path</td><td class=\"v\">/</td><td class=\"v\">/</td></tr>\n<tr><td class=\"e\">session.cookie_samesite</td><td class=\"v\">Lax</td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">session.cookie_secure</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">session.gc_divisor</td><td class=\"v\">1000</td><td class=\"v\">1000</td></tr>\n<tr><td class=\"e\">session.gc_maxlifetime</td><td class=\"v\">1440</td><td class=\"v\">1440</td></tr>\n<tr><td class=\"e\">session.gc_probability</td><td class=\"v\">1</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">session.lazy_write</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">session.name</td><td class=\"v\">PHPSESSID</td><td class=\"v\">PHPSESSID</td></tr>\n<tr><td class=\"e\">session.referer_check</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">session.save_handler</td><td class=\"v\">user</td><td class=\"v\">files</td></tr>\n<tr><td class=\"e\">session.save_path</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">session.serialize_handler</td><td class=\"v\">php</td><td class=\"v\">php</td></tr>\n<tr><td class=\"e\">session.sid_bits_per_character</td><td class=\"v\">4</td><td class=\"v\">4</td></tr>\n<tr><td class=\"e\">session.sid_length</td><td class=\"v\">32</td><td class=\"v\">32</td></tr>\n<tr><td class=\"e\">session.upload_progress.cleanup</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">session.upload_progress.enabled</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">session.upload_progress.freq</td><td class=\"v\">1%</td><td class=\"v\">1%</td></tr>\n<tr><td class=\"e\">session.upload_progress.min_freq</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">session.upload_progress.name</td><td class=\"v\">PHP_SESSION_UPLOAD_PROGRESS</td><td class=\"v\">PHP_SESSION_UPLOAD_PROGRESS</td></tr>\n<tr><td class=\"e\">session.upload_progress.prefix</td><td class=\"v\">upload_progress_</td><td class=\"v\">upload_progress_</td></tr>\n<tr><td class=\"e\">session.use_cookies</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">session.use_only_cookies</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">session.use_strict_mode</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">session.use_trans_sid</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n</table>\n<h2><a name=\"module_simplexml\">SimpleXML</a></h2>\n<table>\n<tr><td class=\"e\">SimpleXML support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Schema support </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_soap\">soap</a></h2>\n<table>\n<tr><td class=\"e\">Soap Client </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Soap Server </td><td class=\"v\">enabled </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">soap.wsdl_cache</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">soap.wsdl_cache_dir</td><td class=\"v\">/tmp</td><td class=\"v\">/tmp</td></tr>\n<tr><td class=\"e\">soap.wsdl_cache_enabled</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">soap.wsdl_cache_limit</td><td class=\"v\">5</td><td class=\"v\">5</td></tr>\n<tr><td class=\"e\">soap.wsdl_cache_ttl</td><td class=\"v\">86400</td><td class=\"v\">86400</td></tr>\n</table>\n<h2><a name=\"module_sodium\">sodium</a></h2>\n<table>\n<tr class=\"h\"><th>sodium support</th><th>enabled</th></tr>\n<tr><td class=\"e\">libsodium headers version </td><td class=\"v\">1.0.18 </td></tr>\n<tr><td class=\"e\">libsodium library version </td><td class=\"v\">1.0.18 </td></tr>\n</table>\n<h2><a name=\"module_spl\">SPL</a></h2>\n<table>\n<tr class=\"h\"><th>SPL support</th><th>enabled</th></tr>\n<tr><td class=\"e\">Interfaces </td><td class=\"v\">OuterIterator, RecursiveIterator, SeekableIterator, SplObserver, SplSubject </td></tr>\n<tr><td class=\"e\">Classes </td><td class=\"v\">AppendIterator, ArrayIterator, ArrayObject, BadFunctionCallException, BadMethodCallException, CachingIterator, CallbackFilterIterator, DirectoryIterator, DomainException, EmptyIterator, FilesystemIterator, FilterIterator, GlobIterator, InfiniteIterator, InvalidArgumentException, IteratorIterator, LengthException, LimitIterator, LogicException, MultipleIterator, NoRewindIterator, OutOfBoundsException, OutOfRangeException, OverflowException, ParentIterator, RangeException, RecursiveArrayIterator, RecursiveCachingIterator, RecursiveCallbackFilterIterator, RecursiveDirectoryIterator, RecursiveFilterIterator, RecursiveIteratorIterator, RecursiveRegexIterator, RecursiveTreeIterator, RegexIterator, RuntimeException, SplDoublyLinkedList, SplFileInfo, SplFileObject, SplFixedArray, SplHeap, SplMinHeap, SplMaxHeap, SplObjectStorage, SplPriorityQueue, SplQueue, SplStack, SplTempFileObject, UnderflowException, UnexpectedValueException </td></tr>\n</table>\n<h2><a name=\"module_sqlite3\">sqlite3</a></h2>\n<table>\n<tr class=\"h\"><th>SQLite3 support</th><th>enabled</th></tr>\n<tr><td class=\"e\">SQLite Library </td><td class=\"v\">3.34.1 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">sqlite3.defensive</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">sqlite3.extension_dir</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n</table>\n<h2><a name=\"module_standard\">standard</a></h2>\n<table>\n<tr><td class=\"e\">Dynamic Library Support </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Path to sendmail </td><td class=\"v\">/usr/sbin/sendmail -t -i </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">assert.active</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">assert.bail</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">assert.callback</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">assert.exception</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">assert.quiet_eval</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">assert.warning</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">auto_detect_line_endings</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">default_socket_timeout</td><td class=\"v\">60</td><td class=\"v\">60</td></tr>\n<tr><td class=\"e\">from</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">session.trans_sid_hosts</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">session.trans_sid_tags</td><td class=\"v\">a=href,area=href,frame=src,form=</td><td class=\"v\">a=href,area=href,frame=src,form=</td></tr>\n<tr><td class=\"e\">unserialize_max_depth</td><td class=\"v\">4096</td><td class=\"v\">4096</td></tr>\n<tr><td class=\"e\">url_rewriter.hosts</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">url_rewriter.tags</td><td class=\"v\">a=href,area=href,frame=src,input=src,form=fakeentry</td><td class=\"v\">a=href,area=href,frame=src,input=src,form=fakeentry</td></tr>\n<tr><td class=\"e\">user_agent</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n</table>\n<h2><a name=\"module_tokenizer\">tokenizer</a></h2>\n<table>\n<tr><td class=\"e\">Tokenizer Support </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_xml\">xml</a></h2>\n<table>\n<tr><td class=\"e\">XML Support </td><td class=\"v\">active </td></tr>\n<tr><td class=\"e\">XML Namespace Support </td><td class=\"v\">active </td></tr>\n<tr><td class=\"e\">libxml2 Version </td><td class=\"v\">2.9.10 </td></tr>\n</table>\n<h2><a name=\"module_xmlreader\">xmlreader</a></h2>\n<table>\n<tr><td class=\"e\">XMLReader </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_xmlwriter\">xmlwriter</a></h2>\n<table>\n<tr><td class=\"e\">XMLWriter </td><td class=\"v\">enabled </td></tr>\n</table>\n<h2><a name=\"module_zend+opcache\">Zend OPcache</a></h2>\n<table>\n<tr><td class=\"e\">Opcode Caching </td><td class=\"v\">Up and Running </td></tr>\n<tr><td class=\"e\">Optimization </td><td class=\"v\">Enabled </td></tr>\n<tr><td class=\"e\">SHM Cache </td><td class=\"v\">Enabled </td></tr>\n<tr><td class=\"e\">File Cache </td><td class=\"v\">Disabled </td></tr>\n<tr><td class=\"e\">Startup </td><td class=\"v\">OK </td></tr>\n<tr><td class=\"e\">Shared memory model </td><td class=\"v\">mmap </td></tr>\n<tr><td class=\"e\">Cache hits </td><td class=\"v\">1278424 </td></tr>\n<tr><td class=\"e\">Cache misses </td><td class=\"v\">12065 </td></tr>\n<tr><td class=\"e\">Used memory </td><td class=\"v\">99390816 </td></tr>\n<tr><td class=\"e\">Free memory </td><td class=\"v\">110660400 </td></tr>\n<tr><td class=\"e\">Wasted memory </td><td class=\"v\">58384240 </td></tr>\n<tr><td class=\"e\">Interned Strings Used memory </td><td class=\"v\">12582464 </td></tr>\n<tr><td class=\"e\">Interned Strings Free memory </td><td class=\"v\">0 </td></tr>\n<tr><td class=\"e\">Cached scripts </td><td class=\"v\">6263 </td></tr>\n<tr><td class=\"e\">Cached keys </td><td class=\"v\">11449 </td></tr>\n<tr><td class=\"e\">Max keys </td><td class=\"v\">32531 </td></tr>\n<tr><td class=\"e\">OOM restarts </td><td class=\"v\">0 </td></tr>\n<tr><td class=\"e\">Hash keys restarts </td><td class=\"v\">0 </td></tr>\n<tr><td class=\"e\">Manual restarts </td><td class=\"v\">0 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">opcache.blacklist_filename</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">opcache.consistency_checks</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">opcache.dups_fix</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">opcache.enable</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">opcache.enable_cli</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">opcache.enable_file_override</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">opcache.error_log</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">opcache.file_cache</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">opcache.file_cache_consistency_checks</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">opcache.file_cache_only</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">opcache.file_update_protection</td><td class=\"v\">2</td><td class=\"v\">2</td></tr>\n<tr><td class=\"e\">opcache.force_restart_timeout</td><td class=\"v\">180</td><td class=\"v\">180</td></tr>\n<tr><td class=\"e\">opcache.huge_code_pages</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">opcache.interned_strings_buffer</td><td class=\"v\">16</td><td class=\"v\">16</td></tr>\n<tr><td class=\"e\">opcache.lockfile_path</td><td class=\"v\">/tmp</td><td class=\"v\">/tmp</td></tr>\n<tr><td class=\"e\">opcache.log_verbosity_level</td><td class=\"v\">1</td><td class=\"v\">1</td></tr>\n<tr><td class=\"e\">opcache.max_accelerated_files</td><td class=\"v\">20000</td><td class=\"v\">20000</td></tr>\n<tr><td class=\"e\">opcache.max_file_size</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">opcache.max_wasted_percentage</td><td class=\"v\">10</td><td class=\"v\">10</td></tr>\n<tr><td class=\"e\">opcache.memory_consumption</td><td class=\"v\">256</td><td class=\"v\">256</td></tr>\n<tr><td class=\"e\">opcache.opt_debug_level</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">opcache.optimization_level</td><td class=\"v\">0x7FFEBFFF</td><td class=\"v\">0x7FFEBFFF</td></tr>\n<tr><td class=\"e\">opcache.preferred_memory_model</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">opcache.preload</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">opcache.preload_user</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">opcache.protect_memory</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">opcache.restrict_api</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">opcache.revalidate_freq</td><td class=\"v\">0</td><td class=\"v\">0</td></tr>\n<tr><td class=\"e\">opcache.revalidate_path</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">opcache.save_comments</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">opcache.use_cwd</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">opcache.validate_permission</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">opcache.validate_root</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">opcache.validate_timestamps</td><td class=\"v\">On</td><td class=\"v\">On</td></tr>\n</table>\n<h2><a name=\"module_zip\">zip</a></h2>\n<table>\n<tr><td class=\"e\">Zip </td><td class=\"v\">enabled </td></tr>\n<tr><td class=\"e\">Zip version </td><td class=\"v\">1.15.6 </td></tr>\n<tr><td class=\"e\">Libzip headers version </td><td class=\"v\">1.7.3 </td></tr>\n<tr><td class=\"e\">Libzip library version </td><td class=\"v\">1.7.3 </td></tr>\n</table>\n<h2><a name=\"module_zlib\">zlib</a></h2>\n<table>\n<tr class=\"h\"><th>ZLib Support</th><th>enabled</th></tr>\n<tr><td class=\"e\">Stream Wrapper </td><td class=\"v\">compress.zlib:// </td></tr>\n<tr><td class=\"e\">Stream Filter </td><td class=\"v\">zlib.inflate, zlib.deflate </td></tr>\n<tr><td class=\"e\">Compiled Version </td><td class=\"v\">1.2.11 </td></tr>\n<tr><td class=\"e\">Linked Version </td><td class=\"v\">1.2.11 </td></tr>\n</table>\n<table>\n<tr class=\"h\"><th>Directive</th><th>Local Value</th><th>Master Value</th></tr>\n<tr><td class=\"e\">zlib.output_compression</td><td class=\"v\">Off</td><td class=\"v\">Off</td></tr>\n<tr><td class=\"e\">zlib.output_compression_level</td><td class=\"v\">-1</td><td class=\"v\">-1</td></tr>\n<tr><td class=\"e\">zlib.output_handler</td><td class=\"v\"><i>no value</i></td><td class=\"v\"><i>no value</i></td></tr>\n</table>\n<h2>Additional Modules</h2>\n<table>\n<tr class=\"h\"><th>Module Name</th></tr>\n</table>\n<h2>Environment</h2>\n<table>\n<tr class=\"h\"><th>Variable</th><th>Value</th></tr>\n<tr><td class=\"e\">PS_COUNTRY </td><td class=\"v\">cl </td></tr>\n<tr><td class=\"e\">HOSTNAME </td><td class=\"v\">1b7010fa525e </td></tr>\n<tr><td class=\"e\">PHP_VERSION </td><td class=\"v\">7.4.29 </td></tr>\n<tr><td class=\"e\">APACHE_CONFDIR </td><td class=\"v\">/etc/apache2 </td></tr>\n<tr><td class=\"e\">PHP_INI_DIR </td><td class=\"v\">/usr/local/etc/php </td></tr>\n<tr><td class=\"e\">GPG_KEYS </td><td class=\"v\">42670A7FE4D0441C8E4632349E4FDC074A4EF02D 5A52880781F755608BF815FC910DEB46F53EA312 </td></tr>\n<tr><td class=\"e\">PS_DOMAIN </td><td class=\"v\">localhost:8080 </td></tr>\n<tr><td class=\"e\">PS_INSTALL_AUTO </td><td class=\"v\">1 </td></tr>\n<tr><td class=\"e\">PS_DEV_MODE </td><td class=\"v\">1 </td></tr>\n<tr><td class=\"e\">PHP_LDFLAGS </td><td class=\"v\">-Wl,-O1 -pie </td></tr>\n<tr><td class=\"e\">DB_PREFIX </td><td class=\"v\">ps_ </td></tr>\n<tr><td class=\"e\">PWD </td><td class=\"v\">/var/www/html </td></tr>\n<tr><td class=\"e\">ADMIN_PASSWD </td><td class=\"v\">password </td></tr>\n<tr><td class=\"e\">PS_LANGUAGE </td><td class=\"v\">es </td></tr>\n<tr><td class=\"e\">DB_PORT </td><td class=\"v\">3306 </td></tr>\n<tr><td class=\"e\">DB_USER </td><td class=\"v\">root </td></tr>\n<tr><td class=\"e\">APACHE_LOG_DIR </td><td class=\"v\">/var/log/apache2 </td></tr>\n<tr><td class=\"e\">LANG </td><td class=\"v\">C </td></tr>\n<tr><td class=\"e\">PS_FOLDER_ADMIN </td><td class=\"v\">adminop </td></tr>\n<tr><td class=\"e\">PHP_SHA256 </td><td class=\"v\">7d0f07869f33311ff3fe1138dc0d6c0d673c37fcb737eaed2c6c10a949f1aed6 </td></tr>\n<tr><td class=\"e\">APACHE_PID_FILE </td><td class=\"v\">/var/run/apache2/apache2.pid </td></tr>\n<tr><td class=\"e\">PHPIZE_DEPS </td><td class=\"v\">autoconf \t\tdpkg-dev \t\tfile \t\tg++ \t\tgcc \t\tlibc-dev \t\tmake \t\tpkg-config \t\tre2c </td></tr>\n<tr><td class=\"e\">DB_PASSWD </td><td class=\"v\">admin </td></tr>\n<tr><td class=\"e\">PHP_URL </td><td class=\"v\">https://www.php.net/distributions/php-7.4.29.tar.xz </td></tr>\n<tr><td class=\"e\">APACHE_RUN_GROUP </td><td class=\"v\">www-data </td></tr>\n<tr><td class=\"e\">APACHE_LOCK_DIR </td><td class=\"v\">/var/lock/apache2 </td></tr>\n<tr><td class=\"e\">PS_HOST_MODE </td><td class=\"v\">0 </td></tr>\n<tr><td class=\"e\">ADMIN_MAIL </td><td class=\"v\">admin@admin.com </td></tr>\n<tr><td class=\"e\">SHLVL </td><td class=\"v\">0 </td></tr>\n<tr><td class=\"e\">PHP_CFLAGS </td><td class=\"v\">-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64 </td></tr>\n<tr><td class=\"e\">PS_ERASE_DB </td><td class=\"v\">1 </td></tr>\n<tr><td class=\"e\">DB_NAME </td><td class=\"v\">prestashop </td></tr>\n<tr><td class=\"e\">APACHE_RUN_DIR </td><td class=\"v\">/var/run/apache2 </td></tr>\n<tr><td class=\"e\">APACHE_ENVVARS </td><td class=\"v\">/etc/apache2/envvars </td></tr>\n<tr><td class=\"e\">DB_SERVER </td><td class=\"v\">php7.4-pres1.7.8.6-apache_mariadb </td></tr>\n<tr><td class=\"e\">PS_FOLDER_INSTALL </td><td class=\"v\">installop </td></tr>\n<tr><td class=\"e\">PS_VERSION </td><td class=\"v\">1.7.8.6 </td></tr>\n<tr><td class=\"e\">APACHE_RUN_USER </td><td class=\"v\">www-data </td></tr>\n<tr><td class=\"e\">PATH </td><td class=\"v\">/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin </td></tr>\n<tr><td class=\"e\">PS_INSTALL_DB </td><td class=\"v\">1 </td></tr>\n<tr><td class=\"e\">PS_ALL_LANGUAGES </td><td class=\"v\">0 </td></tr>\n<tr><td class=\"e\">PS_HANDLE_DYNAMIC_DOMAIN </td><td class=\"v\">0 </td></tr>\n<tr><td class=\"e\">PHP_ASC_URL </td><td class=\"v\">https://www.php.net/distributions/php-7.4.29.tar.xz.asc </td></tr>\n<tr><td class=\"e\">PS_DEMO_MODE </td><td class=\"v\">0 </td></tr>\n<tr><td class=\"e\">PHP_CPPFLAGS </td><td class=\"v\">-fstack-protector-strong -fpic -fpie -O2 -D_LARGEFILE_SOURCE -D_FILE_OFFSET_BITS=64 </td></tr>\n<tr><td class=\"e\">PS_ENABLE_SSL </td><td class=\"v\">0 </td></tr>\n<tr><td class=\"e\">SHELL_VERBOSITY </td><td class=\"v\">3 </td></tr>\n<tr><td class=\"e\">DISTRIBUTION_API_URL </td><td class=\"v\">https://mbo-api.prestashop.com </td></tr>\n<tr><td class=\"e\">MBO_CDC_URL </td><td class=\"v\">https://assets.prestashop3.com/dst/mbo/v1/mbo-cdc.umd.js </td></tr>\n<tr><td class=\"e\">SYMFONY_DOTENV_VARS </td><td class=\"v\">DISTRIBUTION_API_URL,MBO_CDC_URL </td></tr>\n</table>\n<h2>PHP Variables</h2>\n<table>\n<tr class=\"h\"><th>Variable</th><th>Value</th></tr>\n<tr><td class=\"e\">$_REQUEST['_token']</td><td class=\"v\">BVlnjHYsRBwhFUAUkiJtbafevSEKqDJ-hTLDB0X8Xi4</td></tr>\n<tr><td class=\"e\">$_GET['_token']</td><td class=\"v\">BVlnjHYsRBwhFUAUkiJtbafevSEKqDJ-hTLDB0X8Xi4</td></tr>\n<tr><td class=\"e\">$_COOKIE['PHPSESSID']</td><td class=\"v\">f76d56e56f7b643e7a1405b28ec34094</td></tr>\n<tr><td class=\"e\">$_COOKIE['PrestaShop-b495097bf03a2b246a17e22e09a4dd34']</td><td class=\"v\">def50200f5cc9d65db8df715e87f7eac03ad619728e89d04dce5dbb16035301a99f222f77b6f75e4dcb8a1e54f331618eaa86598c8585b4d902cf0f8e84ebad12d5dde92a4e6efd40a2c9d56e9feada69d3106a074a1efea17be577a14cf039f2e8664d70a24453b49c805b80b30bbf0446b33ef31a450518f973d0fd838372eb872f0277d623a99b30ba925ac006b991b77b0773f22ef5a2aef1e5e2484f759141fe6549787de00941255fe347a4a00fbaa0cebd959f5b8aaf031d2736825a936cf772aef0110411bdd060355b58cad229f9987c5fd2e40ff376b2bf1074b04c2a3a6a3c188723c926fb682daf0b98d9d9fed32</td></tr>\n<tr><td class=\"e\">$_COOKIE['PrestaShop-d3ba7e0d7f65d6f0f5b141157cb26af3']</td><td class=\"v\">def50200e0689194bc8da6bd8764673bbf01936bea8587f2fdbac8856a735fd1ecd7e516d446b38aefc9b3a636cd4a008ce2d98a7b6cdfe3372fca2d83b4c313bc1697be158ae08e33b7919bf6923344fc6797328ad16edd773d334b3a8614cb1dca88f9ed34b145190984dfc7a42a413fee67d24b7f3b0909353d521917258a3ec8110d1a69d40006294d1af9a99e537ba6ac9f670c5c71af3c267f5f4592203be4723f983c3232b8aec1a8030bd445d14dba244df37577d262ac5128755e2e1fb4dd8f711fe6c92a548068ad9b51ce5a66e923e59a293286f51d6dac1123ed26573538a14dbbe74d0df2c216a60586e931f6c041ad10c10e69053db489b8ebf73ae32392a8542cea451a8723d97ae229586c1ffcdf404d1eb7ac4e9aa887046bc365649f2b6b02577f27464c4c049934afed8f2b79a2a97252061b18623293c2d1048cafdeba341d2808602c277b9732de1ad8c89b709378266e7e56aa939d3429a0d7a3fad6bfd0ac03a334d9b8bb8cc5c960a9f81ca2871660c96136fee85282522f8ccb113ec6c62389ea8a2098fbf31a28f58b4e7896444aae494f6ed319337ac1fb0d2ef97b882eb81c20b6de04c3b4d3a01725404f80f0e0499588cc049a090c67ac324b57bb923538dbf211ecc659e8eea7908f43</td></tr>\n<tr><td class=\"e\">$_SERVER['BASE']</td><td class=\"v\">/adminop</td></tr>\n<tr><td class=\"e\">$_SERVER['HTTP_MOD_REWRITE']</td><td class=\"v\">On</td></tr>\n<tr><td class=\"e\">$_SERVER['HTTP_COOKIE']</td><td class=\"v\">PHPSESSID=f76d56e56f7b643e7a1405b28ec34094; PrestaShop-b495097bf03a2b246a17e22e09a4dd34=def50200f5cc9d65db8df715e87f7eac03ad619728e89d04dce5dbb16035301a99f222f77b6f75e4dcb8a1e54f331618eaa86598c8585b4d902cf0f8e84ebad12d5dde92a4e6efd40a2c9d56e9feada69d3106a074a1efea17be577a14cf039f2e8664d70a24453b49c805b80b30bbf0446b33ef31a450518f973d0fd838372eb872f0277d623a99b30ba925ac006b991b77b0773f22ef5a2aef1e5e2484f759141fe6549787de00941255fe347a4a00fbaa0cebd959f5b8aaf031d2736825a936cf772aef0110411bdd060355b58cad229f9987c5fd2e40ff376b2bf1074b04c2a3a6a3c188723c926fb682daf0b98d9d9fed32; PrestaShop-d3ba7e0d7f65d6f0f5b141157cb26af3=def50200e0689194bc8da6bd8764673bbf01936bea8587f2fdbac8856a735fd1ecd7e516d446b38aefc9b3a636cd4a008ce2d98a7b6cdfe3372fca2d83b4c313bc1697be158ae08e33b7919bf6923344fc6797328ad16edd773d334b3a8614cb1dca88f9ed34b145190984dfc7a42a413fee67d24b7f3b0909353d521917258a3ec8110d1a69d40006294d1af9a99e537ba6ac9f670c5c71af3c267f5f4592203be4723f983c3232b8aec1a8030bd445d14dba244df37577d262ac5128755e2e1fb4dd8f711fe6c92a548068ad9b51ce5a66e923e59a293286f51d6dac1123ed26573538a14dbbe74d0df2c216a60586e931f6c041ad10c10e69053db489b8ebf73ae32392a8542cea451a8723d97ae229586c1ffcdf404d1eb7ac4e9aa887046bc365649f2b6b02577f27464c4c049934afed8f2b79a2a97252061b18623293c2d1048cafdeba341d2808602c277b9732de1ad8c89b709378266e7e56aa939d3429a0d7a3fad6bfd0ac03a334d9b8bb8cc5c960a9f81ca2871660c96136fee85282522f8ccb113ec6c62389ea8a2098fbf31a28f58b4e7896444aae494f6ed319337ac1fb0d2ef97b882eb81c20b6de04c3b4d3a01725404f80f0e0499588cc049a090c67ac324b57bb923538dbf211ecc659e8eea7908f43; PHPSESSID=d9fe09b0352502a628e1de3d23519c6e; PrestaShop-d3ba7e0d7f65d6f0f5b141157cb26af3=def502006c24c4323383b5fb1a7898f47953a85f442e2e5d03a048cb8e05b9bea8921bdb2c15161cddf015307f6368786cb97633b5e5e5e8a53afc88fd328ee0ed24b110dcfcb0f9ca0de5a79f13664bbb3dd18bcedbbcb9970be27e8e2c9f6ca6b18cedf266741cb2dc54c6506bb54ce6132d3344b9e597b6c2dcca9c01d32dd174f9b043fb36155d967bc1d3aa3842e8a4d768968adfcf4022dd8897</td></tr>\n<tr><td class=\"e\">$_SERVER['CONTENT_TYPE']</td><td class=\"v\">application/json</td></tr>\n<tr><td class=\"e\">$_SERVER['HTTP_USER_AGENT']</td><td class=\"v\">PostmanRuntime/7.32.3</td></tr>\n<tr><td class=\"e\">$_SERVER['HTTP_ACCEPT']</td><td class=\"v\">*/*</td></tr>\n<tr><td class=\"e\">$_SERVER['HTTP_POSTMAN_TOKEN']</td><td class=\"v\">da2f709f-9f79-4c5f-95c1-bb390c9cefe2</td></tr>\n<tr><td class=\"e\">$_SERVER['HTTP_HOST']</td><td class=\"v\">localhost:8080</td></tr>\n<tr><td class=\"e\">$_SERVER['HTTP_ACCEPT_ENCODING']</td><td class=\"v\">gzip, deflate, br</td></tr>\n<tr><td class=\"e\">$_SERVER['HTTP_CONNECTION']</td><td class=\"v\">keep-alive</td></tr>\n<tr><td class=\"e\">$_SERVER['CONTENT_LENGTH']</td><td class=\"v\">31</td></tr>\n<tr><td class=\"e\">$_SERVER['PATH']</td><td class=\"v\">/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin</td></tr>\n<tr><td class=\"e\">$_SERVER['SERVER_SIGNATURE']</td><td class=\"v\">&lt;address&gt;Apache/2.4.53 (Debian) Server at localhost Port 8080&lt;/address&gt;\n</td></tr>\n<tr><td class=\"e\">$_SERVER['SERVER_SOFTWARE']</td><td class=\"v\">Apache/2.4.53 (Debian)</td></tr>\n<tr><td class=\"e\">$_SERVER['SERVER_NAME']</td><td class=\"v\">localhost</td></tr>\n<tr><td class=\"e\">$_SERVER['SERVER_ADDR']</td><td class=\"v\">172.19.0.3</td></tr>\n<tr><td class=\"e\">$_SERVER['SERVER_PORT']</td><td class=\"v\">8080</td></tr>\n<tr><td class=\"e\">$_SERVER['REMOTE_ADDR']</td><td class=\"v\">172.19.0.1</td></tr>\n<tr><td class=\"e\">$_SERVER['DOCUMENT_ROOT']</td><td class=\"v\">/var/www/html</td></tr>\n<tr><td class=\"e\">$_SERVER['REQUEST_SCHEME']</td><td class=\"v\">http</td></tr>\n<tr><td class=\"e\">$_SERVER['CONTEXT_PREFIX']</td><td class=\"v\"><i>no value</i></td></tr>\n<tr><td class=\"e\">$_SERVER['CONTEXT_DOCUMENT_ROOT']</td><td class=\"v\">/var/www/html</td></tr>\n<tr><td class=\"e\">$_SERVER['SERVER_ADMIN']</td><td class=\"v\">webmaster@localhost</td></tr>\n<tr><td class=\"e\">$_SERVER['SCRIPT_FILENAME']</td><td class=\"v\">/var/www/html/adminop/index.php</td></tr>\n<tr><td class=\"e\">$_SERVER['REMOTE_PORT']</td><td class=\"v\">38878</td></tr>\n<tr><td class=\"e\">$_SERVER['GATEWAY_INTERFACE']</td><td class=\"v\">CGI/1.1</td></tr>\n<tr><td class=\"e\">$_SERVER['SERVER_PROTOCOL']</td><td class=\"v\">HTTP/1.1</td></tr>\n<tr><td class=\"e\">$_SERVER['REQUEST_METHOD']</td><td class=\"v\">POST</td></tr>\n<tr><td class=\"e\">$_SERVER['QUERY_STRING']</td><td class=\"v\">_token=BVlnjHYsRBwhFUAUkiJtbafevSEKqDJ-hTLDB0X8Xi4</td></tr>\n<tr><td class=\"e\">$_SERVER['REQUEST_URI']</td><td class=\"v\">/adminop/index.php/modules/webpay/plugin/execute?_token=BVlnjHYsRBwhFUAUkiJtbafevSEKqDJ-hTLDB0X8Xi4</td></tr>\n<tr><td class=\"e\">$_SERVER['SCRIPT_NAME']</td><td class=\"v\">/adminop/index.php</td></tr>\n<tr><td class=\"e\">$_SERVER['PATH_INFO']</td><td class=\"v\">/modules/webpay/plugin/execute</td></tr>\n<tr><td class=\"e\">$_SERVER['PATH_TRANSLATED']</td><td class=\"v\">redirect:/index.php/execute</td></tr>\n<tr><td class=\"e\">$_SERVER['PHP_SELF']</td><td class=\"v\">/adminop/index.php/modules/webpay/plugin/execute</td></tr>\n<tr><td class=\"e\">$_SERVER['REQUEST_TIME_FLOAT']</td><td class=\"v\">1693965104.0631</td></tr>\n<tr><td class=\"e\">$_SERVER['REQUEST_TIME']</td><td class=\"v\">1693965104</td></tr>\n<tr><td class=\"e\">$_SERVER['SHELL_VERBOSITY']</td><td class=\"v\">3</td></tr>\n<tr><td class=\"e\">$_SERVER['DISTRIBUTION_API_URL']</td><td class=\"v\">https://mbo-api.prestashop.com</td></tr>\n<tr><td class=\"e\">$_SERVER['MBO_CDC_URL']</td><td class=\"v\">https://assets.prestashop3.com/dst/mbo/v1/mbo-cdc.umd.js</td></tr>\n<tr><td class=\"e\">$_SERVER['SYMFONY_DOTENV_VARS']</td><td class=\"v\">DISTRIBUTION_API_URL,MBO_CDC_URL</td></tr>\n<tr><td class=\"e\">$_ENV['SHELL_VERBOSITY']</td><td class=\"v\">3</td></tr>\n<tr><td class=\"e\">$_ENV['DISTRIBUTION_API_URL']</td><td class=\"v\">https://mbo-api.prestashop.com</td></tr>\n<tr><td class=\"e\">$_ENV['MBO_CDC_URL']</td><td class=\"v\">https://assets.prestashop3.com/dst/mbo/v1/mbo-cdc.umd.js</td></tr>\n<tr><td class=\"e\">$_ENV['SYMFONY_DOTENV_VARS']</td><td class=\"v\">DISTRIBUTION_API_URL,MBO_CDC_URL</td></tr>\n</table>\n<hr />\n"
            }
        };
    }

    static getLogDetail(params){
        return {
            "filename": "/var/www/html/var/logs/Transbank_webpay/log_transbank-2023-09-10.log",
            "content": "2023-09-10 00:08:58 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:08:58 > INFO > method :getListTransaction [] []#@#2023-09-10 00:09:00 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"service\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListApiServiceLog\"} [] []#@#2023-09-10 00:09:00 > INFO > method :getListApiServiceLog [] []#@#2023-09-10 00:09:12 > INFO > {\"method\":\"getEcommerceConfig\"} [] []#@#2023-09-10 00:09:12 > INFO > method :getEcommerceConfig [] []#@#2023-09-10 00:09:14 > INFO > {\"method\":\"getWebpayplusConfig\"} [] []#@#2023-09-10 00:09:14 > INFO > method :getWebpayplusConfig [] []#@#2023-09-10 00:09:15 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"service\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListApiServiceLog\"} [] []#@#2023-09-10 00:09:15 > INFO > method :getListApiServiceLog [] []#@#2023-09-10 00:16:00 > INFO > {\"method\":\"getListTransaction\",\"first\":0,\"rows\":10,\"page\":1,\"pageCount\":20,\"sortField\":\"order_id\",\"sortOrder\":1,\"filters\":{\"buy_order\":{\"value\":\"e\",\"matchMode\":\"contains\"}}} [] []#@#2023-09-10 00:16:00 > INFO > method :getListTransaction [] []#@#2023-09-10 00:16:08 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:16:08 > INFO > method :getListTransaction [] []#@#2023-09-10 00:16:29 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"service\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListExecutionErrorLog\"} [] []#@#2023-09-10 00:16:29 > INFO > method :getListExecutionErrorLog [] []#@#2023-09-10 00:16:32 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"username\":{\"value\":\"\",\"matchMode\":\"contains\"},\"email\":{\"value\":\"\",\"matchMode\":\"contains\"},\"card_type\":{\"value\":null,\"matchMode\":\"contains\"},\"card_number\":{\"value\":null,\"matchMode\":\"contains\"},\"user_id\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListInscription\"} [] []#@#2023-09-10 00:16:32 > INFO > method :getListInscription [] []#@#2023-09-10 00:17:03 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:17:03 > INFO > method :getListTransaction [] []#@#2023-09-10 00:17:10 > INFO > {\"method\":\"getEcommerceConfig\"} [] []#@#2023-09-10 00:17:10 > INFO > method :getEcommerceConfig [] []#@#2023-09-10 00:17:11 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:17:11 > INFO > method :getListTransaction [] []#@#2023-09-10 00:17:12 > INFO > {\"method\":\"getWebpayplusConfig\"} [] []#@#2023-09-10 00:17:12 > INFO > method :getWebpayplusConfig [] []#@#2023-09-10 00:19:03 > INFO > {\"method\":\"getEcommerceConfig\"} [] []#@#2023-09-10 00:19:03 > INFO > method :getEcommerceConfig [] []#@#2023-09-10 00:19:05 > INFO > {\"method\":\"getWebpayplusConfig\"} [] []#@#2023-09-10 00:19:05 > INFO > method :getWebpayplusConfig [] []#@#2023-09-10 00:19:07 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:19:07 > INFO > method :getListTransaction [] []#@#2023-09-10 00:21:11 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"username\":{\"value\":\"\",\"matchMode\":\"contains\"},\"email\":{\"value\":\"\",\"matchMode\":\"contains\"},\"card_type\":{\"value\":null,\"matchMode\":\"contains\"},\"card_number\":{\"value\":null,\"matchMode\":\"contains\"},\"user_id\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListInscription\"} [] []#@#2023-09-10 00:21:11 > INFO > method :getListInscription [] []#@#2023-09-10 00:21:13 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:21:13 > INFO > method :getListTransaction [] []#@#2023-09-10 00:25:55 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"username\":{\"value\":\"\",\"matchMode\":\"contains\"},\"email\":{\"value\":\"\",\"matchMode\":\"contains\"},\"card_type\":{\"value\":null,\"matchMode\":\"contains\"},\"card_number\":{\"value\":null,\"matchMode\":\"contains\"},\"user_id\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListInscription\"} [] []#@#2023-09-10 00:25:55 > INFO > method :getListInscription [] []#@#2023-09-10 00:26:12 > INFO > {\"method\":\"getEcommerceConfig\"} [] []#@#2023-09-10 00:26:12 > INFO > method :getEcommerceConfig [] []#@#2023-09-10 00:26:14 > INFO > {\"method\":\"getWebpayplusConfig\"} [] []#@#2023-09-10 00:26:14 > INFO > method :getWebpayplusConfig [] []#@#2023-09-10 00:26:17 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"username\":{\"value\":\"\",\"matchMode\":\"contains\"},\"email\":{\"value\":\"\",\"matchMode\":\"contains\"},\"card_type\":{\"value\":null,\"matchMode\":\"contains\"},\"card_number\":{\"value\":null,\"matchMode\":\"contains\"},\"user_id\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListInscription\"} [] []#@#2023-09-10 00:26:17 > INFO > method :getListInscription [] []#@#2023-09-10 00:26:19 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:26:19 > INFO > method :getListTransaction [] []#@#2023-09-10 00:26:22 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":\"webpay_plus\",\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:26:22 > INFO > method :getListTransaction [] []#@#2023-09-10 00:26:25 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:26:25 > INFO > method :getListTransaction [] []#@#2023-09-10 00:26:42 > INFO > {\"method\":\"getEcommerceConfig\"} [] []#@#2023-09-10 00:26:42 > INFO > method :getEcommerceConfig [] []#@#2023-09-10 00:26:43 > INFO > {\"method\":\"getWebpayplusConfig\"} [] []#@#2023-09-10 00:26:43 > INFO > method :getWebpayplusConfig [] []#@#2023-09-10 00:26:44 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:26:44 > INFO > method :getListTransaction [] []#@#2023-09-10 00:26:53 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":\"webpay_plus\",\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:26:53 > INFO > method :getListTransaction [] []#@#2023-09-10 00:26:58 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:26:58 > INFO > method :getListTransaction [] []#@#2023-09-10 00:34:37 > INFO > {\"method\":\"getEcommerceConfig\"} [] []#@#2023-09-10 00:34:37 > INFO > method :getEcommerceConfig [] []#@#2023-09-10 00:34:39 > INFO > {\"method\":\"getWebpayplusConfig\"} [] []#@#2023-09-10 00:34:39 > INFO > method :getWebpayplusConfig [] []#@#2023-09-10 00:34:43 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:34:43 > INFO > method :getListTransaction [] []#@#2023-09-10 00:34:48 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":\"webpay_plus\",\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:34:48 > INFO > method :getListTransaction [] []#@#2023-09-10 00:34:52 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":\"\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:34:52 > INFO > method :getListTransaction [] []#@#2023-09-10 00:34:59 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":\"7\",\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:34:59 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:02 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:02 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:07 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"value\":\"approved\",\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:07 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:09 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:09 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:15 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"value\":\"AUTHORIZED\",\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:15 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:17 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:17 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:22 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"8\",\"matchMode\":\"contains\"},\"transbank_status\":{\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:22 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:29 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"transbank_status\":{\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:29 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:32 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\" tbk:64fce6a3bb278:7\",\"matchMode\":\"contains\"},\"transbank_status\":{\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:32 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:40 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\" tbk:64fce6a3bb278:\",\"matchMode\":\"contains\"},\"transbank_status\":{\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:40 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:50 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"tbk:64fce6a3bb278:\",\"matchMode\":\"contains\"},\"transbank_status\":{\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:50 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:57 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"tbk:64fce6a3bb278:\",\"matchMode\":\"contains\"},\"transbank_status\":{\"matchMode\":\"equals\"},\"environment\":{\"value\":\"TEST\",\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:57 > INFO > method :getListTransaction [] []#@#2023-09-10 00:35:59 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":\"tbk:64fce6a3bb278:\",\"matchMode\":\"contains\"},\"transbank_status\":{\"matchMode\":\"equals\"},\"environment\":{\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:35:59 > INFO > method :getListTransaction [] []#@#2023-09-10 00:36:01 > INFO > {\"first\":0,\"rows\":10,\"sortField\":null,\"sortOrder\":null,\"multiSortMeta\":[],\"filters\":{\"order_id\":{\"value\":null,\"matchMode\":\"equals\"},\"buy_order\":{\"value\":null,\"matchMode\":\"contains\"},\"transbank_status\":{\"matchMode\":\"equals\"},\"environment\":{\"matchMode\":\"equals\"},\"status\":{\"matchMode\":\"equals\"},\"product\":{\"matchMode\":\"equals\"}},\"method\":\"getListTransaction\"} [] []#@#2023-09-10 00:36:01 > INFO > method :getListTransaction [] []#@#2023-09-10 00:36:20 > INFO > {\"first\":0,\"rows\":10,\"page\":1,\"sortField\":null,\"sortOrder\":null,\"filters\":{\"buy_order\":{\"value\":\"\",\"matchMode\":\"contains\"},\"service\":{\"value\":null,\"matchMode\":\"equals\"},\"environment\":{\"value\":null,\"matchMode\":\"equals\"},\"product\":{\"value\":null,\"matchMode\":\"equals\"}},\"method\":\"getListExecutionErrorLog\"} [] []#@#2023-09-10 00:36:20 > INFO > method :getListExecutionErrorLog [] []#@#2023-09-10 00:36:23 > INFO > {\"method\":\"getLogInfo\"} [] []#@#2023-09-10 00:36:23 > INFO > method :getLogInfo [] []#@#2023-09-10 00:40:46 > INFO > {\"method\":\"getLogInfo\"} [] []#@#2023-09-10 00:40:46 > INFO > method :getLogInfo [] []#@#2023-09-10 00:41:15 > INFO > {\"method\":\"getLogDetail\",\"filename\":\"log_transbank-2023-09-10.log\"} [] []#@#2023-09-10 00:41:15 > INFO > method :getLogDetail [] []#@#2023-09-10 00:41:29 > INFO > {\"filename\":\"log_transbank-2023-09-10.log\",\"method\":\"getLogDetail\"} [] []#@#2023-09-10 00:41:29 > INFO > method :getLogDetail [] []#@#2023-09-10 00:41:43 > INFO > {\"filename\":\"log_transbank-2023-09-07.log\",\"method\":\"getLogDetail\"} [] []#@#2023-09-10 00:41:43 > INFO > method :getLogDetail [] []#@#2023-09-10 00:51:26 > INFO > {\"method\":\"getEcommerceConfig\"} [] []#@#2023-09-10 00:51:26 > INFO > method :getEcommerceConfig [] []#@#2023-09-10 00:51:28 > INFO > {\"method\":\"getWebpayplusConfig\"} [] []#@#2023-09-10 00:51:28 > INFO > method :getWebpayplusConfig [] []#@#2023-09-10 00:58:29 > INFO > {\"method\":\"getLogDetail\",\"filename\":\"log_transbank-2023-09-10.log\"} [] []#@#2023-09-10 00:58:29 > INFO > method :getLogDetail [] []#@#",
            "size": "20 KB",
            "lines": 116
        };
    }
}
