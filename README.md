# ui5-deployer-app-test
It's an ui5 app used to test ui5-deployer.

This app is used for testing:
- ui5-deployer: https://github.com/mauriciolauffer/ui5-deployer
- ui5-cli-deployer: https://github.com/mauriciolauffer/ui5-cli-deployer

# ui5.yaml
The ui5.yaml file has a new section called **deployer**. Deployer section has the following parameters and should be changed according to your needs:

```yaml
specVersion: '1.0'
metadata:
  name: ui5-deployer-app-test
type: application
deployer:
  type: sap-netweaver
  sourcePath: /dist
  connection:
    url: https://dev.my-sap-server.com
    proxy:
    strictSSL: false
    SSLCertificatePath: /certs/ssl-certificate.pem
  abapRepository:
    client: 100
    language: EN
    transportRequest: ABAPDK999999
    package: ZMYPACKAGE
    bspApplication: ZDEPLOYAPP001
    bspApplicationText: TEST DEPLOY APP x1
  credentials:
    username: MyUsername
    password: MyPassword
```

You have the option to use all parameters as is from the ui5.yaml file or overwrite few of them when executing ui5-cli.

You can overwrite: abapRepository.transportRequest || credentials.username || credentials.password

```shell script
$ ui5 deploy
```
```shell script
$ ui5 deploy --transport-request=ABAPDK99999
```
```shell script
$ ui5 deploy --username=MyUsername --password=MyPassword
```

# package.json
Here you can find the devDependency to ui5-deployer and few scripts to run it:

``` json
"scripts": {
    "start": "ui5 serve",
    "build": "ui5 build",
    "deploy": "ui5 deploy",
    "deploy-tr": "ui5 deploy --transport-request=ABAPDK99999",
    "deploy-login": "ui5 deploy --username=MyUsername --password=MyPassword"
}
```
