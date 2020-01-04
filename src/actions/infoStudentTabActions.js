import {
  INFO_STUDENT_REGISTERS_TAB,
  INFO_STUDENT_HISTORY_CALLS_TAB,
  INFO_STUDENT_PROGRESS_TAB,
  INFO_STUDENT_HISTORY_COLLECT_MONEY_TAB,
} from '../constants/actionTypes';
import React from 'react';
import {View} from 'react-native';
import InfoStudentRegistersContainer from '../containers/infoStudent/InfoStudentRegistersContainer';
import InfoStudentHistoryCallsContainer from '../containers/infoStudent/InfoStudentHistoryCallsContainer';

export function tabRegisters() {
  return {
    type: INFO_STUDENT_REGISTERS_TAB,
    infoStudentTab: {
      registers: {
        gradient: ['#F6F6F6', '#F6F6F6'],
        textColor: {
          color: 'black',
          fontWeight: '600',
        },
      },
      historyCalls: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      progress: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      historyCollectMoney: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      tabComponent: <InfoStudentRegistersContainer />,
    },
  };
}

export function tabHistoryCalls() {
  return {
    type: INFO_STUDENT_HISTORY_CALLS_TAB,
    infoStudentTab: {
      registers: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      historyCalls: {
        gradient: ['#F6F6F6', '#F6F6F6'],
        textColor: {
          color: 'black',
          fontWeight: '600',
        },
      },
      progress: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      historyCollectMoney: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      tabComponent: <InfoStudentHistoryCallsContainer />,
    },
  };
}

export function tabProgress() {
  return {
    type: INFO_STUDENT_PROGRESS_TAB,
    infoStudentTab: {
      registers: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      historyCalls: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      progress: {
        gradient: ['#F6F6F6', '#F6F6F6'],
        textColor: {
          color: 'black',
          fontWeight: '600',
        },
      },
      historyCollectMoney: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      tabComponent: <View />,
    },
  };
}

export function tabHistoryCollectMoney() {
  return {
    type: INFO_STUDENT_HISTORY_COLLECT_MONEY_TAB,
    infoStudentTab: {
      registers: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      historyCalls: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      progress: {
        gradient: ['#FFFFFF', '#FFFFFF'],
        textColor: {
          color: 'black',
        },
      },
      historyCollectMoney: {
        gradient: ['#F6F6F6', '#F6F6F6'],
        textColor: {
          color: 'black',
          fontWeight: '600',
        },
      },
      tabComponent: <View />,
    },
  };
}
