// Cisco Firewall Device Metrics
const devices = {
    'ASA 5506': {
        StatefulInspectionThroughput: '0.75 Gbps',
        StatefulInspectionThroughputMultiprotocol: '0.3 Gbps',
        StatefulInspectionThroughputNoIPS: '0.25 Gbps',
        StatefulInspectionThroughputIPS: '0.125 Gbps',
        ConcurrentConnections: '50,000',
        newConnections: '5,000',
        IPSecVPNThroughput: '0.1 Gbps',
        MaximumVPNPeers: '50',
        Interfaces: '8',
        FormFactor: 'Desktop',
        NumberOfPowerSupplies: '1',
        Storage: '50 GB',
        alternatives: ['Secure Firewall 1010']
    },
    'ASA 5508': {
        StatefulInspectionThroughput: '1 Gbps',
        StatefulInspectionThroughputMultiprotocol: '0.5 Gbps',
        StatefulInspectionThroughputNoIPS: '0.65 Gbps',
        StatefulInspectionThroughputIPS: '0.6 Gbps',
        ConcurrentConnections: '100,000',
        newConnections: '10,000',
        IPSecVPNThroughput: '0.175 Gbps',
        MaximumVPNPeers: '100',
        Interfaces: '8',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '1',
        Storage: '80 GB',
        alternatives: ['Secure Firewall 1010', 'Secure Firewall 1120']
    },
    'ASA 5516': {
        StatefulInspectionThroughput: '1.8 Gbps',
        StatefulInspectionThroughputMultiprotocol: '0.9 Gbps',
        StatefulInspectionThroughputNoIPS: '1.4 Gbps',
        StatefulInspectionThroughputIPS: '1.2 Gbps',
        ConcurrentConnections: '250,000',
        newConnections: '20,000',
        IPSecVPNThroughput: '0.25 Gbps',
        MaximumVPNPeers: '300',
        Interfaces: '8',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '1',
        Storage: '100 GB',
        alternatives: ['Secure Firewall 1120', 'Secure Firewall 1140']
    },
    'ASA 5525': {
        StatefulInspectionThroughput: '2 Gbps',
        StatefulInspectionThroughputMultiprotocol: '1 Gbps',
        StatefulInspectionThroughputNoIPS: '1.6 Gbps',
        StatefulInspectionThroughputIPS: '1.5 Gbps',
        ConcurrentConnections: '500,000',
        newConnections: '20,000',
        IPSecVPNThroughput: '0.3 Gbps',
        MaximumVPNPeers: '300',
        Interfaces: '8',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '1',
        Storage: '120 GB',
        alternatives: ['Secure Firewall 1140', 'Secure Firewall 1150']
    },
    'ASA 5545': {
        StatefulInspectionThroughput: '3 Gbps',
        StatefulInspectionThroughputMultiprotocol: '1.5 Gbps',
        StatefulInspectionThroughputNoIPS: '1.7 Gbps',
        StatefulInspectionThroughputIPS: '1.6 Gbps',
        ConcurrentConnections: '750,000',
        newConnections: '30,000',
        IPSecVPNThroughput: '0.4 Gbps',
        MaximumVPNPeers: '400',
        Interfaces: '8',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '120 GB',
        alternatives: ['Secure Firewall 1140', 'Secure Firewall 3110']
    },
    'ASA 5555': {
        StatefulInspectionThroughput: '4 Gbps',
        StatefulInspectionThroughputMultiprotocol: '2 Gbps',
        StatefulInspectionThroughputNoIPS: '1.8 Gbps',
        StatefulInspectionThroughputIPS: '1.7 Gbps',
        ConcurrentConnections: '1,000,000',
        newConnections: '50,000',
        IPSecVPNThroughput: '0.7 Gbps',
        MaximumVPNPeers: '700',
        Interfaces: '8',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '120 GB',
        alternatives: ['Secure Firewall 1150', 'Secure Firewall 3110']
    },
    // 5YR License EOL 27th May 2025. 1 & 3 Year Licenses still available
    'Firepower 2110': {
        StatefulInspectionThroughput: '3 Gbps',
        StatefulInspectionThroughputMultiprotocol: '1.5 Gbps',
        StatefulInspectionThroughputNoIPS: '2.6 Gbps',
        StatefulInspectionThroughputIPS: '2.6 Gbps',
        ConcurrentConnections: '1,000,000',
        newConnections: '14,000',
        IPSecVPNThroughput: '0.95 Gbps',
        MaximumVPNPeers: '1,500',
        Interfaces: '16',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '1',
        Storage: '100 GB',
        alternatives: ['Secure Firewall 3105'],
    },
    // 5YR License EOL 27th May 2025. 1 & 3 Year Licenses still available
    'Firepower 2120': {
        StatefulInspectionThroughput: '6 Gbps',
        StatefulInspectionThroughputMultiprotocol: '3 Gbps',
        StatefulInspectionThroughputNoIPS: '3.4 Gbps',
        StatefulInspectionThroughputIPS: '3.4 Gbps',
        ConcurrentConnections: '1,500,000',
        newConnections: '18,000',
        IPSecVPNThroughput: '1.2 Gbps',
        MaximumVPNPeers: '3,500',
        Interfaces: '16',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '1',
        Storage: '100 GB',
        alternatives: ['Secure Firewall 3110', 'Secure Firewall 3120']
    },
    // 5YR License EOL 27th May 2025. 1 & 3 Year Licenses still available
    'Firepower 2130': {
        StatefulInspectionThroughput: '10 Gbps',
        StatefulInspectionThroughputMultiprotocol: '5 Gbps',
        StatefulInspectionThroughputNoIPS: '5.4 Gbps',
        StatefulInspectionThroughputIPS: '5.4 Gbps',
        ConcurrentConnections: '2,000,000',
        newConnections: '30,000',
        IPSecVPNThroughput: '1.9 Gbps',
        MaximumVPNPeers: '7,500',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '200 GB',
        alternatives: ['Secure Firewall 3120', 'Secure Firewall 3130']
    },
    // 5YR License EOL 27th May 2025. 1 & 3 Year Licenses still available
    'Firepower 2140': {
        StatefulInspectionThroughput: '20 Gbps',
        StatefulInspectionThroughputMultiprotocol: '10 Gbps',
        StatefulInspectionThroughputNoIPS: '10.4 Gbps',
        StatefulInspectionThroughputIPS: '10.4 Gbps',
        ConcurrentConnections: '3,000,000',
        newConnections: '57,000',
        IPSecVPNThroughput: '3.6 Gbps',
        MaximumVPNPeers: '10,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '200 GB',
        alternatives: ['Secure Firewall 3120', 'Secure Firewall 3130']
    },
    // 1YR licenses are still an option
    'Firepower 4110': { 
        StatefulInspectionThroughput: '35 Gbps', 
        StatefulInspectionThroughputMultiprotocol: '15 Gbps',
        StatefulInspectionThroughputNoIPS: '12 Gbps', 
        StatefulInspectionThroughputIPS: '10 Gbps', 
        ConcurrentConnections: '9,000,000', 
        newConnections: '68,000', 
        IPSecVPNThroughput: '6 Gbps',
        MaximumVPNPeers: '10,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '200 GB',
        alternatives: ['Secure Firewall 3110', 'Secure Firewall 3140']
    },
    'Firepower 4120': { 
        StatefulInspectionThroughput: '60 Gbps', 
        StatefulInspectionThroughputMultiprotocol: '30 Gbps',
        StatefulInspectionThroughputNoIPS: '20 Gbps', 
        StatefulInspectionThroughputIPS: '15 Gbps', 
        ConcurrentConnections: '15,000,000', 
        newConnections: '120,000', 
        IPSecVPNThroughput: '10 Gbps',
        MaximumVPNPeers: '15,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '200 GB',
        alternatives: ['Secure Firewall 3140', 'Secure Firewall 4215']
    },
    'Firepower 4140': { 
        StatefulInspectionThroughput: '70 Gbps', 
        StatefulInspectionThroughputMultiprotocol: '40 Gbps',
        StatefulInspectionThroughputNoIPS: '25 Gbps', 
        StatefulInspectionThroughputIPS: '20 Gbps', 
        ConcurrentConnections: '25,000,000', 
        newConnections: '160,000', 
        IPSecVPNThroughput: '13 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '400 GB',
        alternatives: ['Secure Firewall 3140', 'Secure Firewall 4225']
    },
    'Firepower 4150': { 
        StatefulInspectionThroughput: '75 Gbps', 
        StatefulInspectionThroughputMultiprotocol: '50 Gbps',
        StatefulInspectionThroughputNoIPS: '30 Gbps', 
        StatefulInspectionThroughputIPS: '24 Gbps', 
        ConcurrentConnections: '30,000,000', 
        newConnections: '200,000', 
        IPSecVPNThroughput: '14 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '400 GB',
        alternatives: ['Secure Firewall 3140', 'Secure Firewall 4225']
    },
     'Firepower 9300 SM-24': { 
        StatefulInspectionThroughput: '75 Gbps', 
        StatefulInspectionThroughputMultiprotocol: '50 Gbps',
        StatefulInspectionThroughputNoIPS: '30 Gbps', 
        StatefulInspectionThroughputIPS: '24 Gbps', 
        ConcurrentConnections: '30,000,000', 
        newConnections: '120,000', 
        IPSecVPNThroughput: '13.5 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '3RU',
        NumberOfPowerSupplies: '2',
        Storage: '1200 GB',
        alternatives: ['Secure Firewall 4215', 'Secure Firewall 4225']
    },
     'Firepower 9300 SM-36': { 
        StatefulInspectionThroughput: '80 Gbps', 
        StatefulInspectionThroughputMultiprotocol: '60 Gbps',
        StatefulInspectionThroughputNoIPS: '42 Gbps', 
        StatefulInspectionThroughputIPS: '34 Gbps', 
        ConcurrentConnections: '30,000,000', 
        newConnections: '160,000', 
        IPSecVPNThroughput: '16 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '3RU',
        NumberOfPowerSupplies: '2',
        Storage: '1200 GB',
        alternatives: ['Secure Firewall 4215', 'Secure Firewall 4225']
    },
     'Firepower 9300 SM-44': { 
        StatefulInspectionThroughput: '80 Gbps', 
        StatefulInspectionThroughputMultiprotocol: '60 Gbps',
        StatefulInspectionThroughputNoIPS: '54 Gbps', 
        StatefulInspectionThroughputIPS: '53 Gbps', 
        ConcurrentConnections: '30,000,000', 
        newConnections: '300,000', 
        IPSecVPNThroughput: '17 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '3RU',
        NumberOfPowerSupplies: '2',
        Storage: '1200 GB',
        alternatives: ['Secure Firewall 4215', 'Secure Firewall 4225']
    },
};
const newdevices = {
    // New Firepower models
    'Secure Firewall 1010': { 
        StatefulInspectionThroughput: '2 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '1.4 Gbps',
        StatefulInspectionThroughputNoIPS: '0.89 Gbps', 
        StatefulInspectionThroughputIPS: '0.88 Gbps', 
        ConcurrentConnections: '100,000', 
        newConnections: '6,000', 
        IPSecVPNThroughput: '0.4 Gbps',
        MaximumVPNPeers: '75',
        Interfaces: '8',
        FormFactor: 'Desktop or Wall Mountable',
        NumberOfPowerSupplies: '1',
        Storage: '200 GB'
    },
     'Secure Firewall 1010E': { 
        StatefulInspectionThroughput: '2 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '1.4 Gbps',
        StatefulInspectionThroughputNoIPS: '0.89 Gbps', 
        StatefulInspectionThroughputIPS: '0.88 Gbps', 
        ConcurrentConnections: '100,000', 
        newConnections: '6,000', 
        IPSecVPNThroughput: '0.4 Gbps',
        MaximumVPNPeers: '75',
        Interfaces: '8',
        FormFactor: 'Desktop or Wall Mountable',
        NumberOfPowerSupplies: '1',
        Storage: '200 GB'
    },
    'Secure Firewall 1120': { 
        StatefulInspectionThroughput: '4.5 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '2.5 Gbps',
        StatefulInspectionThroughputNoIPS: '2.3 Gbps', 
        StatefulInspectionThroughputIPS: '2.3 Gbps', 
        ConcurrentConnections: '200,000', 
        newConnections: '15,000', 
        IPSecVPNThroughput: '1.2 Gbps',
        MaximumVPNPeers: '150',
        Interfaces: '12',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '1',
        Storage: '200 GB'
    },
    'Secure Firewall 1140': { 
        StatefulInspectionThroughput: '6 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '3.5 Gbps',
        StatefulInspectionThroughputNoIPS: '3.3 Gbps', 
        StatefulInspectionThroughputIPS: '3.3 Gbps', 
        ConcurrentConnections: '400,000', 
        newConnections: '22,000', 
        IPSecVPNThroughput: '1.4 Gbps',
        MaximumVPNPeers: '400',
        Interfaces: '12',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '1',
        Storage: '200 GB'
    },
    'Secure Firewall 1150': { 
        StatefulInspectionThroughput: '7.5 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '4.5 Gbps',
        StatefulInspectionThroughputNoIPS: '5.3 Gbps',  
        StatefulInspectionThroughputIPS: '4.9 Gbps',
        ConcurrentConnections: '600,000', 
        newConnections: '28,000', 
        IPSecVPNThroughput: '2.4 Gbps',
        MaximumVPNPeers: '800',
        Interfaces: '12',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '1',
        Storage: '200 GB'
    },
     'Secure Firewall 1210': { 
        StatefulInspectionThroughput: '6.5 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '6 Gbps',
        StatefulInspectionThroughputNoIPS: '6 Gbps',  
        StatefulInspectionThroughputIPS: '6 Gbps',
        ConcurrentConnections: '200,000', 
        newConnections: '35,000', 
        IPSecVPNThroughput: '5 Gbps',
        MaximumVPNPeers: '200',
        Interfaces: '8',
        FormFactor: 'Desktop or Rack Mount',
        NumberOfPowerSupplies: '1',
        Storage: '480 GB'
    },
     'Secure Firewall 1220': { 
        StatefulInspectionThroughput: '15 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '12 Gbps',
        StatefulInspectionThroughputNoIPS: '9 Gbps',  
        StatefulInspectionThroughputIPS: '9 Gbps',
        ConcurrentConnections: '300,000', 
        newConnections: '50,000', 
        IPSecVPNThroughput: '10 Gbps',
        MaximumVPNPeers: '300',
        Interfaces: '10',
        FormFactor: 'Desktop or Rack Mount',
        NumberOfPowerSupplies: '1',
        Storage: '480 GB'
    },
    'Secure Firewall 3105': { 
        StatefulInspectionThroughput: '10 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '9 Gbps',
        StatefulInspectionThroughputNoIPS: '10 Gbps', 
        StatefulInspectionThroughputIPS: '10 Gbps', 
        ConcurrentConnections: '1,500,000', 
        newConnections: '90,000', 
        IPSecVPNThroughput: '5.5 Gbps',
        MaximumVPNPeers: '2,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '900 GB'
    },
    'Secure Firewall 3110': { 
        StatefulInspectionThroughput: '18 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '15 Gbps',
        StatefulInspectionThroughputNoIPS: '17 Gbps', 
        StatefulInspectionThroughputIPS: '17 Gbps', 
        ConcurrentConnections: '2,000,000', 
        newConnections: '130,000', 
        IPSecVPNThroughput: '8 Gbps',
        MaximumVPNPeers: '3,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '900 GB'
    },
    'Secure Firewall 3120': { 
        StatefulInspectionThroughput: '22 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '17 Gbps',
        StatefulInspectionThroughputNoIPS: '21 Gbps',  
        StatefulInspectionThroughputIPS: '21 Gbps',
        ConcurrentConnections: '4,000,000', 
        newConnections: '170,000', 
        IPSecVPNThroughput: '10 Gbps',
        MaximumVPNPeers: '7,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '900 GB'
    },
    'Secure Firewall 3130': { 
        StatefulInspectionThroughput: '42 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '39 Gbps',
        StatefulInspectionThroughputNoIPS: '38 Gbps', 
        StatefulInspectionThroughputIPS: '38 Gbps', 
        ConcurrentConnections: '6,000,000', 
        newConnections: '240,000', 
        IPSecVPNThroughput: '17.8 Gbps',
        MaximumVPNPeers: '15,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '900 GB'
    },
    'Secure Firewall 3140': { 
        StatefulInspectionThroughput: '49 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '43 Gbps',
        StatefulInspectionThroughputNoIPS: '45 Gbps',  
        StatefulInspectionThroughputIPS: '45 Gbps',
        ConcurrentConnections: '10,000,000', 
        newConnections: '300,000', 
        IPSecVPNThroughput: '22.4 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '900 GB'
    },
     'Secure Firewall 4215': { 
        StatefulInspectionThroughput: '90 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '65 Gbps',
        StatefulInspectionThroughputNoIPS: '65 Gbps',  
        StatefulInspectionThroughputIPS: '65 Gbps',
        ConcurrentConnections: '15,000,000', 
        newConnections: '350,000', 
        IPSecVPNThroughput: '45 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '3600 GB'
    },
     'Secure Firewall 4225': { 
        StatefulInspectionThroughput: '95 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '85 Gbps',
        StatefulInspectionThroughputNoIPS: '80 Gbps',  
        StatefulInspectionThroughputIPS: '80 Gbps',
        ConcurrentConnections: '30,000,000', 
        newConnections: '600,000', 
        IPSecVPNThroughput: '80 Gbps',
        MaximumVPNPeers: '25,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '3600 GB'
    },
     'Secure Firewall 4245': { 
        StatefulInspectionThroughput: '180 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '100 Gbps',
        StatefulInspectionThroughputNoIPS: '140 Gbps',  
        StatefulInspectionThroughputIPS: '140 Gbps',
        ConcurrentConnections: '60,000,000', 
        newConnections: '800,000', 
        IPSecVPNThroughput: '140 Gbps',
        MaximumVPNPeers: '30,000',
        Interfaces: '24',
        FormFactor: '1RU',
        NumberOfPowerSupplies: '2',
        Storage: '3600 GB'
    },
      'Firepower 9300 SM-40': { 
        StatefulInspectionThroughput: '80 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '55 Gbps',
        StatefulInspectionThroughputNoIPS: '55 Gbps',  
        StatefulInspectionThroughputIPS: '55 Gbps',
        ConcurrentConnections: '35,000,000', 
        newConnections: '380,000', 
        IPSecVPNThroughput: '27 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '3RU',
        NumberOfPowerSupplies: '2',
        Storage: '1600 GB'
    },
     'Firepower 9300 SM-48': { 
        StatefulInspectionThroughput: '80 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '60 Gbps',
        StatefulInspectionThroughputNoIPS: '65 Gbps',  
        StatefulInspectionThroughputIPS: '65 Gbps',
        ConcurrentConnections: '35,000,000', 
        newConnections: '450,000', 
        IPSecVPNThroughput: '33 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '3RU',
        NumberOfPowerSupplies: '2',
        Storage: '1600 GB'
    },
     'Firepower 9300 SM-56': { 
        StatefulInspectionThroughput: '80 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '64 Gbps',
        StatefulInspectionThroughputNoIPS: '70 Gbps',  
        StatefulInspectionThroughputIPS: '68 Gbps',
        ConcurrentConnections: '35,000,000', 
        newConnections: '490,000', 
        IPSecVPNThroughput: '36 Gbps',
        MaximumVPNPeers: '20,000',
        Interfaces: '24',
        FormFactor: '3RU',
        NumberOfPowerSupplies: '2',
        Storage: '1600 GB'
    },
     'Firepower 9300 3 x SM-56': { 
        StatefulInspectionThroughput: '235 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '172 Gbps',
        StatefulInspectionThroughputNoIPS: '190 Gbps',  
        StatefulInspectionThroughputIPS: '190 Gbps',
        ConcurrentConnections: '60,000,000', 
        newConnections: '1,100,000', 
        IPSecVPNThroughput: '110 Gbps',
        MaximumVPNPeers: '60,000',
        Interfaces: '24',
        FormFactor: '3RU',
        NumberOfPowerSupplies: '2',
        Storage: '4800 GB'
    },
};

// List of metrics to compare
const metrics = [
  { name: "ASA Stateful Inspection Firewall Throughput", key: "StatefulInspectionThroughput" },
  { name: "ASA Stateful Inspection Multiprotocol Throughput", key: "StatefulInspectionThroughputMultiprotocol" },
  { name: "FTD Throughput with FW and AVC", key: "StatefulInspectionThroughputNoIPS" },
  { name: "FTD Throughput with FW, AVC and IPS", key: "StatefulInspectionThroughputIPS" },
  { name: "FTD Concurrent Firewall Connections", key: "ConcurrentConnections" },
  { name: "FTD New Connections per Second", key: "newConnections" },
  { name: "IPSec VPN Throughput", key: "IPSecVPNThroughput" },
  { name: "Maximum VPN Peers", key: "MaximumVPNPeers" },
  { name: "Maximum Number of Interfaces", key: "Interfaces" },
  { name: "Form Factor", key: "FormFactor" },
  { name: "Maximum Number of Power Supplies", key: "NumberOfPowerSupplies" },
  { name: "Factory Storage", key: "Storage" }
];

// Get references to HTML elements
const deviceSelect = document.getElementById('deviceSelect');
const deviceSelectEoL = document.getElementById('deviceSelectEoL');
const deviceSelectCompare1 = document.getElementById('deviceSelectCompare1');
const deviceSelectCompare2 = document.getElementById('deviceSelectCompare2');
const comparisonResults = document.getElementById('comparisonResults');
const threeDeviceComparisonResults = document.getElementById('threeDeviceComparisonResults');
const filterOptions = document.getElementById('filterOptions');
const noResultsMessage = document.getElementById('noResultsMessage');
const clearButtonOptionTwo = document.getElementById('clearButtonOptionTwo');
const filteredNewDevicesResults = document.getElementById('filteredNewDevicesResults');


// Populate dropdown with EoL devices for Option One
Object.keys(devices).forEach(device => {
    let option = document.createElement('option');
    option.value = device;
    option.textContent = device;
    deviceSelect.appendChild(option);
});

// Populate EoL dropdown for Option Two
Object.keys(devices).forEach(device => {
    let option = document.createElement('option');
    option.value = device;
    option.textContent = device;
    deviceSelectEoL.appendChild(option);
});

// Populate new device dropdowns for Option Two
Object.keys(newdevices).forEach(device => {
    let option1 = document.createElement('option');
    option1.value = device;
    option1.textContent = device;
    deviceSelectCompare1.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = device;
    option2.textContent = device;
    deviceSelectCompare2.appendChild(option2);
});

// Helper function to extract numeric value and its unit
function extractNumberAndUnit(value) {
    if (typeof value !== 'string') return { number: null, unit: 'No Data Available' };
    const match = value.match(/([\d,.]+)\s*(.*)/);
    if (match) {
        return { number: parseFloat(match[1].replace(/,/g, '')), unit: match[2].trim() };
    }
    return { number: null, unit: 'No Data Available' };
}

// Function to format the number and unit for displaying
function formatNumber(value) {
    if (!value) return 'No Data Available';

    // Check if the value is numeric
    const { number, unit } = extractNumberAndUnit(value);

    // If it's not numeric, return the exact string entered
    if (number === null) {
        return value;  // Return the exact value as entered (e.g., "1RU" or any text)
    }

    // Otherwise, format the numeric value as usual
    return number.toLocaleString() + (unit ? ` ${unit}` : '');
}


// Modified calculateDifference function to handle non-numeric form factor text
function calculateDifference(eolValue, altValue) {
    const eolData = extractNumberAndUnit(eolValue);
    const altData = extractNumberAndUnit(altValue);

    // Check if both values are non-numeric
    if (eolData.number === null && altData.number === null) {
        // If both values are non-numeric, display the text and mark the difference as "Not Applicable"
        return { difference: 'Not Applicable', positive: null };
    }

    // If at least one value is numeric, calculate the difference
    if (eolData.number !== null && altData.number !== null) {
        const diff = altData.number - eolData.number;
        const sign = diff >= 0 ? '+' : '-';
        return { difference: `${sign}${Math.abs(diff).toLocaleString()} ${altData.unit}`, positive: diff >= 0 };
    }

    // In case one value is numeric and the other is non-numeric
    return { difference: 'Not Applicable', positive: null };
}



// Add filter inputs for each metric
const filterForm = document.createElement('form');
filterForm.id = 'filterForm';

// List of metric names where we want to add "Gbps"
const metricsWithGbps = [
    "ASA Stateful Inspection Firewall Throughput",
    "ASA Stateful Inspection Multiprotocol Throughput",
    "FTD Throughput with FW and AVC",
    "FTD Throughput with FW, AVC and IPS",
    "IPSec VPN Throughput",
    "Factory Storage"
];

metrics.forEach(metric => {
    const filterLabel = document.createElement('label');    

    // Check if the current metric is in the list to add "Gbps"
    if (metricsWithGbps.includes(metric.name)) {
        filterLabel.textContent = `${metric.name} (Min, Gbps): `;
    } else {
        // Keep the original "(Min)" label for other metrics
        filterLabel.textContent = `${metric.name} (Min): `;
    }

    const filterInput = document.createElement('input');
    filterInput.type = 'number';
    filterInput.id = `filter_${metric.key}`;
    filterInput.placeholder = "Enter minimum value"; 
    filterForm.appendChild(filterLabel);
    filterForm.appendChild(filterInput);
    filterForm.appendChild(document.createElement('br'));

    // Set placeholder based on the metric name
    switch (metric.name) {
        case "ASA Stateful Inspection Firewall Throughput":
        case "ASA Stateful Inspection Multiprotocol Throughput":
        case "FTD Throughput with FW and AVC":
        case "FTD Throughput with FW, AVC and IPS":
        case "IPSec VPN Throughput":
            filterInput.placeholder = "Example: 10";
            break;
        case "FTD Concurrent Firewall Connections":
            filterInput.placeholder = "Example: 100";
            break;
        case "FTD New Connections per Second":
            filterInput.placeholder = "Example: 1000";
            break;
        case "Maximum VPN Peers":
            filterInput.placeholder = "Example: 50";
            break;
        case "Interfaces":
            filterInput.placeholder = "Example: 4";
            break;
        case "Form Factor":
            filterInput.placeholder = "Example: 1 = 1RU";
            break;
        case "Number of Power Supplies":
            filterInput.placeholder = "Example: 1";
            break;
        case "Storage":
            filterInput.placeholder = "Example: 500 GB";
            break;
        default:
            filterInput.placeholder = "Minimum value";
    }

});

// Filter form displayed with HTML
filterOptions.appendChild(filterForm);

// Function to apply filters (modified to handle three-device comparison)
function applyFilters() {
    const selectedDevice = deviceSelect.value;
    const selectedDeviceEoL = deviceSelectEoL.value;
    const selectedDeviceCompare1 = deviceSelectCompare1.value;
    const selectedDeviceCompare2 = deviceSelectCompare2.value;

    function displayEoLDeviceInfo() {
    }
    document.addEventListener('DOMContentLoaded', () => {
        displayEoLDeviceInfo();
    });

    // Get filter values
    const filters = {};
    metrics.forEach(metric => {
        const filterValue = document.getElementById(`filter_${metric.key}`).value;
        if (filterValue) {
            filters[metric.key] = parseFloat(filterValue);
        }
    });

    // Clear previous results and hide the "no results" message
    comparisonResults.innerHTML = '';
    threeDeviceComparisonResults.innerHTML = '';
    noResultsMessage.style.display = 'none';

    if (selectedDeviceEoL) { // Check if an EoL device is selected
        if (selectedDeviceCompare1 && selectedDeviceCompare2) {
            // Compare three devices if two comparison devices are selected
            compareThreeDevices(selectedDeviceEoL, selectedDeviceCompare1, selectedDeviceCompare2);
        } else if (selectedDeviceCompare1 || selectedDeviceCompare2) {
            // Compare two devices if one comparison device is selected
            const deviceToCompare = selectedDeviceCompare1 || selectedDeviceCompare2;
            compareTwoDevices(selectedDeviceEoL, deviceToCompare, threeDeviceComparisonResults);
        } 
    } else if (selectedDevice) {
        // Handle Option One: Filter and display alternatives
        const deviceFound = filterAndDisplayAlternatives(selectedDevice, filters);
        noResultsMessage.style.display = deviceFound ? 'none' : 'block';
    } else {
        // Handle no selection: Display all new devices if no EoL device is selected
        const deviceFound = displayFilteredNewDevices(filters);
        noResultsMessage.style.display = deviceFound ? 'none' : 'block';
    }
}

// Handle the comparison between two devices
function compareTwoDevices(device1, device2, resultsContainer) {
    const device1Data = devices[device1] || newdevices[device1];
    const device2Data = devices[device2] || newdevices[device2];

    if (!device1Data || !device2Data) return false;

    let resultsHtml = `<h2>Comparison between ${device1} and ${device2}</h2>`;
    resultsHtml += `
  <table class="comparison-table"> 
    <tr>
      <th>Metric</th>
      <th>${device1}</th>
      <th>${device2}</th>
      <th>Difference</th>
    </tr>`;

    metrics.forEach(metric => {
        const value1 = device1Data[metric.key];
        const value2 = device2Data[metric.key];
        const { difference, positive } = calculateDifference(value1, value2);
        const diffClass = positive !== null ? (positive ? 'positive-diff' : 'negative-diff') : '';

        resultsHtml += `<tr> 
      <td><b>${metric.name}:</b></td>
      <td>${formatNumber(value1)}</td>
      <td>${formatNumber(value2)}</td>
      <td class="${diffClass}">${difference}</td>
    </tr>`;
    });

    resultsHtml += `</table>`;

    resultsContainer.innerHTML = resultsHtml;
    noResultsMessage.style.display = 'none';

    return true;
}

// Handle the comparison between three devices
function compareThreeDevices(device1, device2, device3) {
    const device1Data = devices[device1] || newdevices[device1];
    const device2Data = devices[device2] || newdevices[device2];
    const device3Data = devices[device3] || newdevices[device3];

    if (!device1Data || !device2Data || !device3Data) return false;

    let resultsHtml = `<h2>Comparison between ${device1}, ${device2} and ${device3}</h2>`;
    resultsHtml += `
  <table class="comparison-table"> 
    <tr>
      <th>Metric</th>
      <th>${device1}</th>
      <th>${device2}</th>
      <th>${device3}</th>
      <th>Difference (Device 2 vs Device 1)</th> 
      <th>Difference (Device 3 vs Device 1)</th> 
    </tr>`;

    metrics.forEach(metric => {
        const value1 = device1Data[metric.key];
        const value2 = device2Data[metric.key];
        const value3 = device3Data[metric.key];

        const diff12 = calculateDifference(value1, value2);
        const diff13 = calculateDifference(value1, value3);

        const diffClass12 = diff12.positive !== null ? (diff12.positive ? 'positive-diff' : 'negative-diff') : '';
        const diffClass13 = diff13.positive !== null ? (diff13.positive ? 'positive-diff' : 'negative-diff') : '';

        resultsHtml += `<tr> 
      <td><b>${metric.name}:</b></td>
      <td>${formatNumber(value1)}</td>
      <td>${formatNumber(value2)}</td>
      <td>${formatNumber(value3)}</td>
      <td class="${diffClass12}">${diff12.difference}</td>
      <td class="${diffClass13}">${diff13.difference}</td>
    </tr>`;
    });

    resultsHtml += `</table>`;

    threeDeviceComparisonResults.innerHTML = resultsHtml;
    noResultsMessage.style.display = 'none';

    return true;
}

function displayFilteredNewDevices(filters) {
    const filteredNewDevices = Object.keys(newdevices).filter(newDevice => {
        const newDeviceData = newdevices[newDevice];
        return Object.keys(filters).every(metricKey => {
            const { number: newDeviceNumber } = extractNumberAndUnit(newDeviceData[metricKey]);
            return newDeviceNumber !== null && newDeviceNumber >= filters[metricKey];
        });
    });

    // Generate the comparison table or show "no results" message
    if (filteredNewDevices.length === 0 || Object.keys(filters).length === 0) {
        noResultsMessage.style.display = 'none'; // Hide the "no results" message when filters are cleared
        comparisonResults.innerHTML = '';
        threeDeviceComparisonResults.innerHTML = '';
        filteredNewDevicesResults.innerHTML = ""; // Clear the filteredNewDevicesResults div
        return false;
    } else {
        noResultsMessage.style.display = 'none';

        let resultsHtml = `<h2>Available Migration Options</h2>`;
        resultsHtml += `
      <table class="comparison-table" data-device-type="new"> 
        <tr>
          <th>New Device</th>
          ${metrics.map(metric => `<th>${metric.name}</th>`).join('')}
        </tr>`;

        filteredNewDevices.forEach(newDevice => {
            const newDeviceData = newdevices[newDevice];
            resultsHtml += `<tr>
        <td><b>${newDevice}</b></td>`;

            metrics.forEach(metric => {
                resultsHtml += `<td>${formatNumber(newDeviceData[metric.key]) || 'No Comparable Data Available'}</td>`;
            });

            resultsHtml += `</tr>`;
        });

        resultsHtml += `</table>`;

        filteredNewDevicesResults.innerHTML = resultsHtml;
        threeDeviceComparisonResults.innerHTML = '';
        return true;
    }
}
function filterAndDisplayAlternatives(selectedDevice, filters) {
    const deviceData = devices[selectedDevice];
    if (!deviceData) {
        noResultsMessage.style.display = 'block';
        comparisonResults.innerHTML = '';
        threeDeviceComparisonResults.innerHTML = '';
        return false;
    }

    const filteredAlternatives = deviceData.alternatives.filter(alternative => {
        const altData = newdevices[alternative];
        return Object.keys(filters).every(metricKey => {
            const { number: eolNumber } = extractNumberAndUnit(deviceData[metricKey]);
            const { number: altNumber } = extractNumberAndUnit(altData[metricKey]);
            return altNumber !== null && altNumber >= filters[metricKey] &&
                (eolNumber !== null ? altNumber >= eolNumber : true);
        });
    });

    // Generate the comparison table or show "no results" message
    if (filteredAlternatives.length === 0) {
        noResultsMessage.style.display = 'block';
        comparisonResults.innerHTML = '';
        return false;
    } else {
        noResultsMessage.style.display = 'none';

        let resultsHtml = `<h2>Comparison for ${selectedDevice}</h2>`;
        resultsHtml += `
    <table class="comparison-table"> 
      <tr>
        <th>Metric</th>
        <th>${selectedDevice} (EoL Device)</th>
        ${filteredAlternatives.map(alt => `<th>${alt} (Alternative Device)</th><th>Difference</th>`).join('')}
      </tr>`;

        metrics.forEach(metric => {
            resultsHtml += `<tr> 
        <td><b>${metric.name}:</b></td>
        <td>${formatNumber(deviceData[metric.key]) || 'No Comparable Data Available'}</td>`;

            filteredAlternatives.forEach(alternative => {
                const altData = newdevices[alternative];
                const eolValue = deviceData[metric.key];
                const altValue = altData ? altData[metric.key] : null;

                resultsHtml += `<td>${formatNumber(altValue) || 'No Comparable Data Available'}</td>`;

                const diffResult = calculateDifference(eolValue, altValue);
                const diffClass = diffResult.positive ? 'positive-diff' : 'negative-diff';
                resultsHtml += `<td class="${diffClass}">${diffResult.difference}</td>`;
            });

            resultsHtml += `</tr>`;
        });

        resultsHtml += `</table>`;

        comparisonResults.innerHTML = resultsHtml;
        threeDeviceComparisonResults.innerHTML = '';
        return true;
    }
}

// Function to clear filters
function clearFilters() {
    metrics.forEach(metric => {
        document.getElementById(`filter_${metric.key}`).value = '';
    });
    noResultsMessage.style.display = 'none'; // Explicitly hide the "no results" message
    comparisonResults.innerHTML = ''; // Clear the results table for Option Three
    threeDeviceComparisonResults.innerHTML = '';
    filteredNewDevicesResults.innerHTML = "";
   
}

let isExporting = false; // Flag to track if the PDF is being exported

// Function to export results to PDF using html2pdf.js
function exportResultsToPDF(resultsContainerId) {
    if (isExporting) {
        return; // Prevent multiple exports
    }

    const resultsContainer = document.getElementById(resultsContainerId);

    // Ensure the container is not empty
    if (!resultsContainer || resultsContainer.innerHTML.trim() === "") {
        alert("No results available to export!");
        return;
    }

    try {
        isExporting = true; // Set the flag to true to indicate export is in progress
        showPleaseWaitPrompt(); // Show the "Please Wait" prompt

        // Add the website footer to the container (if not already included)
        addFooterToContainer(resultsContainer);

        // Options for html2pdf
        const options = {
            margin: [40, 10, 40, 10], // Top, Right, Bottom, Left margins with extra space at the top and bottom
            filename: `${resultsContainerId}_Results.pdf`,
            image: { type: 'png', quality: 1 },
            html2canvas: { dpi: 192, scale: 0.75 }, // Adjust the scale to fit more content
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }, // Use A4 format in landscape orientation
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] } // Avoid page breaks within elements
        };

        // Use html2pdf to convert the container to PDF and save it
        html2pdf().from(resultsContainer).set(options).toPdf().get('pdf').then(function (pdf) {
            const totalPages = pdf.internal.getNumberOfPages();

            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                pdf.addImage('https://networkwizkid.com/wp-content/uploads/2024/09/new-logo-final-v3-full-e1677752694770.png', 'PNG', 10, 10, 50, 20); // Adjust the position and size as needed
            }

            pdf.save(`${resultsContainerId}_Results.pdf`);
            hidePleaseWaitPrompt(); // Hide the "Please Wait" prompt
            isExporting = false; // Reset the flag after export is complete
        }).then(() => {
            // Clear the filters after the PDF has been downloaded
            clearFilters();
        });
    } catch (error) {
        console.error("Error exporting to PDF:", error);
        alert("Failed to export results. Please try again.");
        hidePleaseWaitPrompt(); // Hide the "Please Wait" prompt in case of error
        isExporting = false; // Reset the flag in case of error
    }
}

// Helper function to add footer to the results container
function addFooterToContainer(container) {
    // Ensure the footer isn't added multiple times
    const existingFooter = container.querySelector('.export-footer');
    if (!existingFooter) {
        const footer = document.createElement('div');
        footer.classList.add('export-footer'); // Mark the footer to prevent duplication
        footer.style.textAlign = 'center';
        footer.style.fontSize = '12px';
        footer.style.marginTop = '20px';
        footer.innerHTML = `
            <p>Network Wizkid</p>
            <p>networkwizkid.com</p>
            <p>${new Date().getFullYear()} All Rights Reserved</p>
        `;
        container.appendChild(footer); // Add footer at the bottom of the content
    }
}

// Helper function to show the "Please Wait" prompt
function showPleaseWaitPrompt() {
    const prompt = document.createElement('div');
    prompt.id = 'pleaseWaitPrompt';
    prompt.style.position = 'fixed';
    prompt.style.top = '50%';
    prompt.style.left = '50%';
    prompt.style.transform = 'translate(-50%, -50%)';
    prompt.style.padding = '20px';
    prompt.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    prompt.style.color = 'white';
    prompt.style.fontSize = '18px';
    prompt.style.zIndex = '1000';
    prompt.innerText = 'Please Wait...';
    document.body.appendChild(prompt);
}

// Helper function to hide the "Please Wait" prompt
function hidePleaseWaitPrompt() {
    const prompt = document.getElementById('pleaseWaitPrompt');
    if (prompt) {
        document.body.removeChild(prompt);
    }
}

// Function to clear filters
function clearFilters() {
    metrics.forEach(metric => {
        document.getElementById(`filter_${metric.key}`).value = '';
    });
    noResultsMessage.style.display = 'none'; // Explicitly hide the "no results" message
    comparisonResults.innerHTML = ''; // Clear the results table for Option Three
    threeDeviceComparisonResults.innerHTML = '';
    filteredNewDevicesResults.innerHTML = "";
}

// Attach event listeners to each export button
document.getElementById('exportToPdfOption1').addEventListener('click', () => {
    exportResultsToPDF('comparisonResults');
});

document.getElementById('exportToPdfOption2').addEventListener('click', () => {
    exportResultsToPDF('threeDeviceComparisonResults');
});

document.getElementById('exportToPdfOption3').addEventListener('click', () => {
    exportResultsToPDF('filteredNewDevicesResults');
});



// Attach event listeners
filterButton.addEventListener('click', applyFilters);
clearFiltersButton.addEventListener('click', clearFilters);
deviceSelect.addEventListener('change', applyFilters);
deviceSelectEoL.addEventListener('change', applyFilters);
deviceSelectCompare1.addEventListener('change', applyFilters);
deviceSelectCompare2.addEventListener('change', applyFilters);

// Button clear, option one
clearButton.addEventListener('click', () => {
    deviceSelect.selectedIndex = 0;
    comparisonResults.innerHTML = ''; // Clear the results table
    noResultsMessage.style.display = 'none'; // Hide the "no results" message
    
});

// Add event listener for Option Two clear button
clearButtonOptionTwo.addEventListener('click', () => {
    deviceSelectEoL.selectedIndex = 0;
    deviceSelectCompare1.selectedIndex = 0;
    deviceSelectCompare2.selectedIndex = 0;
    threeDeviceComparisonResults.innerHTML = ''; // Clear the results table for Option Two
    noResultsMessage.style.display = 'none';
  
});