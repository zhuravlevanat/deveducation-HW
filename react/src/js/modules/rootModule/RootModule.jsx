import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/PureComponent.jsx';
import { LoginModule } from '../loginModule/LoginModule.jsx';
import { MainModule } from '../mainModule/MainModule.jsx';
import axios from 'axios';
import qs from 'querystring';
axios.defaults.baseURL = 'http://localhost:1010';
import ErrorBoundary from '../../decorators/ErrorBoundary.jsx';

@ErrorBoundary
export default class RootModule extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                list: [],
                person: {},
                logs: [],
            },
            uuid: '',
            userName: 'Test',
            editData: null,
            loginData: {
                user: 'root',
                password: '',
                database: 'db_tables',
                table: 'person',
                isLoggedSuccessfully: false,
            },
            selectedTab: 'edit', // edit/logs
            selectEdit: 'list', // edit/list
            currentVersion: 'variant1',
            currentId: 1,
            userPermissions: {
                read: false,
                write: false,
                create: false,
            },
            errorData: {
                isError: false,
                errorMessage: '',
            },
            // changingValues: {
            //     name: '',
            //     age: '',
            //     gender: '',
            //     address: '',
            // },
        };
    }

    getDBRequest = async (relativeURL) => {
        try {
            const response = await axios.get(relativeURL);
            if (response.data.isError) {
                throw response.data.data;
            }
            return response.data;
        } catch (err) {
            this.showError(err);
            return;
        }
    };

    postDBRequest = async (relativeURL, body) => {
    
            const { data } = await axios.post(relativeURL, qs.stringify(body));
            if (data.isError) {
                throw new Error(data.data);
            }
            return data;
       
    };

    showError(error) {
        console.warn(error);
    }

    setUserPermitions(grants) {
        const permision = grants.slice(0, grants.indexOf('*')).trim();
        // console.info(permision);
        // eslint-disable-next-line default-case
        switch (permision) {
            case 'GRANT ALL PRIVILEGES ON':
                this.setState(state => {
                    return {
                        ...state,
                        userPermissions: {
                            read: true,
                            write: true,
                            create: true,
                        },
                    };
                });
                break;
            case 'GRANT SELECT ON':
                this.setState(state => {
                    return {
                        ...state,
                        userPermissions: {
                            read: true,
                            write: false,
                            create: false,
                        },
                    };
                });
                break;
            case 'GRANT SELECT, CREATE ON':
                this.setState(state => {
                    return {
                        ...state,
                        userPermissions: {
                            read: true,
                            write: false,
                            create: true,
                        },
                    };
                });
                break;
            case 'GRANT SELECT, INSERT ON':
                this.setState(state => {
                    return {
                        ...state,
                        userPermissions: {
                            read: true,
                            write: true,
                            create: false,
                        },
                    };
                });
                break;
        }
    }

    connectDB = async () => {
        const body = this.state.loginData;
        const { uuid, data } = await this.postDBRequest('/login', body);
            if (uuid) {
                this.setUserPermitions(data.grants);
                this.setState(state => {
                    return {
                        ...state,
                        uuid,
                    };
                });
                const list = await this.getListOfPersons(this.state.currentVersion);

                if (list) {
                    this.setState(state => {
                        return {
                            ...state,
                            data: {
                                ...state.data,
                                list,
                            },
                            loginData: {
                                ...state.loginData,
                                isLoggedSuccessfully: true,
                            },
                        };
                    });
                }

                window.history.pushState(null, null, `?uuid=${this.state.uuid}`);
            } else {
                throw new Error('Connect')
            }        
    };

    disconnectDB = async () => {
        try {
            const response = await this.postDBRequest(`/logout?uuid=${this.state.uuid}`, null);
            if (response) {
                this.setState(state => {
                    return {
                        ...state,
                        uuid: null,
                    };
                });
                window.history.pushState(null, null, `/`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    handleLogoutClick = async () => {
        try {
            await this.disconnectDB();
            this.setState(state => {
                return {
                    ...state,
                    selectedTab: 'edit',
                    selectEdit: 'list',
                    loginData: {
                        ...state.loginData,
                        isLoggedSuccessfully: false,
                    },
                };
            });
        } catch (err) {
            console.error(err);
        }

    };

    getListOfPersons = async version => {
        try {
            const { data } = await this.getDBRequest(`/person?uuid=${this.state.uuid}&version=${version}`);
            if (data) {
                return data;
            }
        } catch (err) {
            this.showError(err);
        }
    };

    getPersonDataClick = async id => {
        try {
            let data = await this.getPersonData(id, this.state.currentVersion);
            this.setState(state => {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        person: data,
                    },
                };
            });
        } catch (err) {
            console.error(err);
        }

    };

    getPersonData = async (id, version) => { //вызов данных по id и version
        try {
            const { data } = await this.getDBRequest(`/personByID?uuid=${this.state.uuid}&version=${version}&id=${id}`);
            if (data) {
                return data;
            }
        } catch (err) {
            this.showError(err);
        }
    };

    getLogsData = async (version) => {
        try {
            const { data } = await this.getDBRequest(`/personLog?uuid=${this.state.uuid}&version=${version}`);
            if (data) {
                return data;
            }
        } catch (err) {
            this.showError(err);
        }
    };

    showListLogs = async (selectedTab, version) => {
        try {
            let data = null;

            if (selectedTab === 'edit') {
                data = await this.getListOfPersons(version);

                this.setState(state => {
                    return {
                        ...state,
                        data: {
                            ...state.data,
                            list: data,
                        },
                    };
                });
            } else {
                data = await this.getLogsData(version);

                this.setState(state => {
                    return {
                        ...state,
                        data: {
                            ...state.data,
                            logs: data,
                        },
                    };
                });
            }
        } catch (err) {
            console.error(err);
        }

    };

    handleTabsetClick = async event => {
        const value = event.target.id;
        this.setState(state => {
            return {
                ...state,
                selectedTab: value,
            };
        });

        try {
            await this.showListLogs(value, this.state.currentVersion);
        } catch (err) {
            console.error(err);
        }
    };

    handleSelectChange = async event => {
        const version = event.target.value;

        this.setState(state => {
            return {
                ...state,
                currentVersion: version,
            };
        });

        try {
            await this.showListLogs(this.state.selectedTab, version);
        } catch (err) {
            console.error(err);
        }
    };

    updatePersonData = async (id, version, body) => {
        let oldPersonData = await this.getPersonData(id, version);
        try {
            const resp = await this.postDBRequest(`/updatePerson?uuid=${this.state.uuid}&version=${version}&id=${id}`, body);
            if (resp) {
                if (resp.data.changedRows > 0) { // if person data change
                    let arrOfChange = this.changesInPerson(oldPersonData, body);
                    const result = await this.updateLogsData(version, arrOfChange);
                    return result.data;
                }
            }
        } catch (err) {
            this.showError(err);
        }
    };

    mergePersonData = async (id, body) => {

    };

    updateLogsData = async (version, bodyArr) => {
        let url = `/updateLogs?uuid=${this.state.uuid}&version=${version}`;
        try {
            const response = await axios.post(url, qs.stringify(bodyArr));
            return response;
        } catch (err) {
            console.error(err);
        }
    };

    handleButtonCancel = () => {
        this.setState(state => {
            return {
                ...state,
                selectedTab: 'edit',
                selectEdit: 'list',
            };
        });
    };

    onChangeLoginInput = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ loginData: { ...this.state.loginData, [name]: value } });
    };

    onSubmitLoginPage = async event => {
        event.preventDefault();

        try {
            await this.connectDB();
        } catch (err) {
            console.error(err);
        }
    };

    handleButtonChange = async event => {
        const id = event.target.id;

        try {
            await this.getPersonDataClick(id);
        } catch (err) {
            console.error(err);
        }

        this.setState(state => {
            return {
                ...state,
                selectedTab: 'edit',
                selectEdit: 'edit',
                currentId: Number(id),
            };
        });
    };

    handleTextAreaChange = event => {
        const value = event.target.value;
        const id = event.target.id;
        const changeData = Object.assign({}, this.state.data.person);
        changeData[id] = value;

        this.setState(state => {
            return {
                ...state,
                data: {
                    ...state.data,
                    person: changeData,
                },
            };
        });
    };

    handleEditFormSubmit = async event => {
        event.preventDefault();
        const _this = event.target;

        try {
            if (_this.value === 'Save') {
                await this.updatePersonData(this.state.currentId, this.state.currentVersion, this.state.data.person);
            } else if (_this.value === 'Save & Merge') {
                let versionArr = ['variant1', 'variant2', 'variant3', 'variant4'];
                for (let version of versionArr) {
                    let newPersonData = this.state.data.person;
                    let oldPersonData = await this.getPersonData(this.state.currentId, this.state.currentVersion);

                    const resp = await this.postDBRequest(`/merge?uuid=${this.state.uuid}&id=${this.state.currentId}`, newPersonData);
                    if (resp) {
                        if (resp.data.changedRows > 0) {
                            let arrOfChange = this.changesInPerson(oldPersonData, newPersonData);
                            const result = await this.updateLogsData(version, arrOfChange);
                            return result.data;
                        }
                    }
                }
            }

            this.setState(state => {
                return {
                    ...state,
                    selectedTab: 'edit',
                    selectEdit: 'list',
                };
            });

            await this.showListLogs(this.state.selectedTab, this.state.currentVersion);
        } catch (err) {
            console.error(err);
        }

    };

    changesInPerson = (oldVal, newVal) => {
        let result = [];
        let oldData = Object.values(oldVal);
        let newData = Object.values(newVal);
        let keys = Object.keys(oldVal);

        let check = oldData.filter((elem, index) => elem !== newData[index] ? elem : false);

        for (let changeValue of check) {
            const changeIndex = oldData.findIndex(elem => elem === changeValue);
            result.push([keys[changeIndex], this.state.loginData.user, oldData[changeIndex], newData[changeIndex]]);
        }

        return result;
    };

    showPage = () => {
        if (this.state.loginData.isLoggedSuccessfully) {
            return (
                <MainModule
                    list={this.state.data.list}
                    selectedTab={this.state.selectedTab}
                    selectEdit={this.state.selectEdit}
                    handleButtonChange={this.handleButtonChange}
                    // handleButtonSave={this.updatePersonDataClick}
                    // handleButtonMerge={this.mergePersonDataClick}
                    handleButtonCancel={this.handleButtonCancel}
                    personBody={this.state.data.person}
                    handleLogoutClick={this.handleLogoutClick}
                    handleTabsetClick={this.handleTabsetClick}
                    logentry={this.state.data.logs}
                    handleSelectChange={this.handleSelectChange}
                    handleTextAreaChange={this.handleTextAreaChange}
                    handleEditFormSubmit={this.handleEditFormSubmit}
                />
            );
        }
        return (
            <LoginModule
                user={this.state.loginData.user}
                database={this.state.loginData.database}
                password={this.state.loginData.password}
                table={this.state.loginData.table}
                isError={this.state.errorData.isError}
                errorMessage={this.state.errorData.errorMessage}
                onChangeLoginInput={this.onChangeLoginInput}
                onSubmitLoginPage={this.onSubmitLoginPage}
            />);
    };

    render() {
        return (
            <div>
                <div className='wrapper'>
                    {this.showPage()}
                </div>
            </div>
        );
    }
}

RootModule.propTypes = {
    propAny: PropTypes.any,
    propBool: PropTypes.bool,
    propFunc: PropTypes.func,
    propArray: PropTypes.array,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object,
    //propRequired: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
    handleListClick: PropTypes.func,
};
