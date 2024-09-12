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
        alternatives: ['Secure Firewall 1150', 'Secure Firewall 3110']
    },
    'Firepower 4110': { 
        StatefulInspectionThroughput: '35 Gbps', 
        StatefulInspectionThroughputMultiprotocol: '15 Gbps',
        StatefulInspectionThroughputNoIPS: '12 Gbps', 
        StatefulInspectionThroughputIPS: '10 Gbps', 
        ConcurrentConnections: '9,000,000', 
        newConnections: '68,000', 
        IPSecVPNThroughput: '6 Gbps',
        MaximumVPNPeers: '10,000',
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
        MaximumVPNPeers: '75'
    },
     'Secure Firewall 1010E': { 
        StatefulInspectionThroughput: '2 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '1.4 Gbps',
        StatefulInspectionThroughputNoIPS: '0.89 Gbps', 
        StatefulInspectionThroughputIPS: '0.88 Gbps', 
        ConcurrentConnections: '100,000', 
        newConnections: '6,000', 
        IPSecVPNThroughput: '0.4 Gbps',
        MaximumVPNPeers: '75'
    },
    'Secure Firewall 1120': { 
        StatefulInspectionThroughput: '4.5 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '2.5 Gbps',
        StatefulInspectionThroughputNoIPS: '2.3 Gbps', 
        StatefulInspectionThroughputIPS: '2.3 Gbps', 
        ConcurrentConnections: '200,000', 
        newConnections: '15,000', 
        IPSecVPNThroughput: '1.2 Gbps',
        MaximumVPNPeers: '150'
    },
    'Secure Firewall 1140': { 
        StatefulInspectionThroughput: '6 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '3.5 Gbps',
        StatefulInspectionThroughputNoIPS: '3.3 Gbps', 
        StatefulInspectionThroughputIPS: '3.3 Gbps', 
        ConcurrentConnections: '400,000', 
        newConnections: '22,000', 
        IPSecVPNThroughput: '1.4 Gbps',
        MaximumVPNPeers: '400'
    },
    'Secure Firewall 1150': { 
        StatefulInspectionThroughput: '7.5 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '4.5 Gbps',
        StatefulInspectionThroughputNoIPS: '5.3 Gbps',  
        StatefulInspectionThroughputIPS: '4.9 Gbps',
        ConcurrentConnections: '600,000', 
        newConnections: '28,000', 
        IPSecVPNThroughput: '2.4 Gbps',
        MaximumVPNPeers: '800'
    },
     'Secure Firewall 1210': { 
        StatefulInspectionThroughput: 'No Data Available',  
        StatefulInspectionThroughputMultiprotocol: 'No Data Available',
        StatefulInspectionThroughputNoIPS: '3 Gbps',  
        StatefulInspectionThroughputIPS: '3 Gbps',
        ConcurrentConnections: 'No Data Available', 
        newConnections: 'No Data Available', 
        IPSecVPNThroughput: '2 Gbps',
        MaximumVPNPeers: 'No Data Available'
    },
     'Secure Firewall 1220': { 
        StatefulInspectionThroughput: 'No Data Available',  
        StatefulInspectionThroughputMultiprotocol: 'No Data Available',
        StatefulInspectionThroughputNoIPS: '6 Gbps',  
        StatefulInspectionThroughputIPS: '6 Gbps',
        ConcurrentConnections: 'No Data Available', 
        newConnections: 'No Data Available', 
        IPSecVPNThroughput: '4 Gbps',
        MaximumVPNPeers: 'No Data Available'
    },
    'Firepower 2110': { 
        StatefulInspectionThroughput: '3 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '1.5 Gbps',
        StatefulInspectionThroughputNoIPS: '2.6 Gbps',  
        StatefulInspectionThroughputIPS: '2.6 Gbps',
        ConcurrentConnections: '1,000,000', 
        newConnections: '14,000', 
        IPSecVPNThroughput: '0.95 Gbps',
        MaximumVPNPeers: '1,500'
    },
    'Firepower 2120': { 
        StatefulInspectionThroughput: '6 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '3 Gbps',
        StatefulInspectionThroughputNoIPS: '3.4 Gbps',  
        StatefulInspectionThroughputIPS: '3.4 Gbps',
        ConcurrentConnections: '1,500,000', 
        newConnections: '18,000', 
        IPSecVPNThroughput: '1.2 Gbps',
        MaximumVPNPeers: '3,500'
    },
    'Firepower 2130': { 
        StatefulInspectionThroughput: '10 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '5 Gbps',
        StatefulInspectionThroughputNoIPS: '5.4 Gbps',  
        StatefulInspectionThroughputIPS: '5.4 Gbps',
        ConcurrentConnections: '2,000,000', 
        newConnections: '30,000', 
        IPSecVPNThroughput: '1.9 Gbps',
        MaximumVPNPeers: '7,500'
    },
    'Firepower 2140': { 
        StatefulInspectionThroughput: '20 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '10 Gbps',
        StatefulInspectionThroughputNoIPS: '10.4 Gbps',  
        StatefulInspectionThroughputIPS: '10.4 Gbps',
        ConcurrentConnections: '3,000,000', 
        newConnections: '57,000', 
        IPSecVPNThroughput: '3.6 Gbps',
        MaximumVPNPeers: '10,000'
    },
    'Secure Firewall 3105': { 
        StatefulInspectionThroughput: '10 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '9 Gbps',
        StatefulInspectionThroughputNoIPS: '10 Gbps', 
        StatefulInspectionThroughputIPS: '10 Gbps', 
        ConcurrentConnections: '1,500,000', 
        newConnections: '90,000', 
        IPSecVPNThroughput: '5.5 Gbps',
        MaximumVPNPeers: '2,000'
    },
    'Secure Firewall 3110': { 
        StatefulInspectionThroughput: '18 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '15 Gbps',
        StatefulInspectionThroughputNoIPS: '17 Gbps', 
        StatefulInspectionThroughputIPS: '17 Gbps', 
        ConcurrentConnections: '2,000,000', 
        newConnections: '130,000', 
        IPSecVPNThroughput: '8 Gbps',
        MaximumVPNPeers: '3,000'
    },
    'Secure Firewall 3120': { 
        StatefulInspectionThroughput: '22 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '17 Gbps',
        StatefulInspectionThroughputNoIPS: '21 Gbps',  
        StatefulInspectionThroughputIPS: '21 Gbps',
        ConcurrentConnections: '4,000,000', 
        newConnections: '170,000', 
        IPSecVPNThroughput: '10 Gbps',
        MaximumVPNPeers: '7,000'
    },
    'Secure Firewall 3130': { 
        StatefulInspectionThroughput: '42 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '39 Gbps',
        StatefulInspectionThroughputNoIPS: '38 Gbps', 
        StatefulInspectionThroughputIPS: '38 Gbps', 
        ConcurrentConnections: '6,000,000', 
        newConnections: '240,000', 
        IPSecVPNThroughput: '17.8 Gbps',
        MaximumVPNPeers: '15,000'
    },
    'Secure Firewall 3140': { 
        StatefulInspectionThroughput: '49 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '43 Gbps',
        StatefulInspectionThroughputNoIPS: '45 Gbps',  
        StatefulInspectionThroughputIPS: '45 Gbps',
        ConcurrentConnections: '10,000,000', 
        newConnections: '300,000', 
        IPSecVPNThroughput: '22.4 Gbps',
        MaximumVPNPeers: '20,000'
    },
     'Secure Firewall 4215': { 
        StatefulInspectionThroughput: '90 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '65 Gbps',
        StatefulInspectionThroughputNoIPS: '65 Gbps',  
        StatefulInspectionThroughputIPS: '65 Gbps',
        ConcurrentConnections: '15,000,000', 
        newConnections: '350,000', 
        IPSecVPNThroughput: '45 Gbps',
        MaximumVPNPeers: '20,000'
    },
     'Secure Firewall 4225': { 
        StatefulInspectionThroughput: '95 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '85 Gbps',
        StatefulInspectionThroughputNoIPS: '80 Gbps',  
        StatefulInspectionThroughputIPS: '80 Gbps',
        ConcurrentConnections: '30,000,000', 
        newConnections: '600,000', 
        IPSecVPNThroughput: '80 Gbps',
        MaximumVPNPeers: '25,000'
    },
     'Secure Firewall 4245': { 
                StatefulInspectionThroughput: '180 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '100 Gbps',
        StatefulInspectionThroughputNoIPS: '140 Gbps',  
        StatefulInspectionThroughputIPS: '140 Gbps',
        ConcurrentConnections: '60,000,000', 
        newConnections: '800,000', 
        IPSecVPNThroughput: '140 Gbps',
        MaximumVPNPeers: '30,000'
    },
      'Firepower 9300 SM-40': { 
        StatefulInspectionThroughput: '80 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '55 Gbps',
        StatefulInspectionThroughputNoIPS: '55 Gbps',  
        StatefulInspectionThroughputIPS: '55 Gbps',
        ConcurrentConnections: '35,000,000', 
        newConnections: '380,000', 
        IPSecVPNThroughput: '27 Gbps',
        MaximumVPNPeers: '20,000'
    },
     'Firepower 9300 SM-48': { 
        StatefulInspectionThroughput: '80 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '60 Gbps',
        StatefulInspectionThroughputNoIPS: '65 Gbps',  
        StatefulInspectionThroughputIPS: '65 Gbps',
        ConcurrentConnections: '35,000,000', 
        newConnections: '450,000', 
        IPSecVPNThroughput: '33 Gbps',
        MaximumVPNPeers: '20,000'
    },
     'Firepower 9300 SM-56': { 
        StatefulInspectionThroughput: '80 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '64 Gbps',
        StatefulInspectionThroughputNoIPS: '70 Gbps',  
        StatefulInspectionThroughputIPS: '68 Gbps',
        ConcurrentConnections: '35,000,000', 
        newConnections: '490,000', 
        IPSecVPNThroughput: '36 Gbps',
        MaximumVPNPeers: '20,000'
    },
     'Firepower 9300 3 x SM-56': { 
        StatefulInspectionThroughput: '235 Gbps',  
        StatefulInspectionThroughputMultiprotocol: '172 Gbps',
        StatefulInspectionThroughputNoIPS: '190 Gbps',  
        StatefulInspectionThroughputIPS: '190 Gbps',
        ConcurrentConnections: '60,000,000', 
        newConnections: '1,100,000', 
        IPSecVPNThroughput: '110 Gbps',
        MaximumVPNPeers: '60,000'
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
  { name: "Maximum VPN Peers", key: "MaximumVPNPeers" }
];

// Populate the dropdown list dynamically
const deviceSelect = document.getElementById('deviceSelect');
const comparisonResults = document.getElementById('comparisonResults');

// Populate dropdown with EoL devices
Object.keys(devices).forEach(device => {
  let option = document.createElement('option');
  option.value = device;
  option.textContent = device;
  deviceSelect.appendChild(option);
});

// Helper functions 
function extractNumberAndUnit(value) {
  if (typeof value !== 'string') return { number: null, unit: 'No Data Available' };
  const match = value.match(/([\d,.]+)\s*(.*)/);
  if (match) {
    return { number: parseFloat(match[1].replace(/,/g, '')), unit: match[2].trim() };
  }
  return { number: null, unit: 'No Data Available' };
}

function formatNumber(value) {
  if (!value) return 'No Data Available';
  const { number, unit } = extractNumberAndUnit(value);
  if (number === null) return 'No Data Available';
  return number.toLocaleString() + (unit ? ` ${unit}` : ''); 
}

function calculateDifference(eolValue, altValue) {
  const eolData = extractNumberAndUnit(eolValue);
  const altData = extractNumberAndUnit(altValue);

  if (eolData.number === null || altData.number === null) {
    return 'No Data Available'; 
  }

  const diff = altData.number - eolData.number;
  const sign = diff >= 0 ? '+' : '-'; 
  return `${sign}${Math.abs(diff).toLocaleString()} ${altData.unit}`; 
}

// Add filter inputs for each metric
const filterForm = document.createElement('form');
filterForm.id = 'filterForm';
metrics.forEach(metric => {
  const filterLabel = document.createElement('label');
  filterLabel.textContent = `${metric.name} (Min): `;
  const filterInput = document.createElement('input');
  filterInput.type = 'number';
  filterInput.id = `filter_${metric.key}`; 
  filterForm.appendChild(filterLabel);
  filterForm.appendChild(filterInput);
  filterForm.appendChild(document.createElement('br')); 
});

// Add a button to trigger filtering
const filterButton = document.createElement('button');
filterButton.type = 'button'; 
filterButton.textContent = 'Apply Filters';
filterForm.appendChild(filterButton);

// Add a "Clear Filters" button
const clearFiltersButton = document.createElement('button');
clearFiltersButton.type = 'button';
clearFiltersButton.textContent = 'Clear Filters';
filterForm.appendChild(clearFiltersButton);

// Add a "Clear Selection" button next to the dropdown
const clearButton = document.createElement('button');
clearButton.type = 'button';
clearButton.textContent = 'Clear Selection';
deviceSelect.parentNode.insertBefore(clearButton, deviceSelect.nextSibling);

// Insert the filter form before the comparison results
comparisonResults.parentNode.insertBefore(filterForm, comparisonResults);

// Function to apply filters
function applyFilters() {
  const selectedDevice = deviceSelect.value;

  // Get filter values
  const filters = {};
  metrics.forEach(metric => {
    const filterValue = document.getElementById(`filter_${metric.key}`).value;
    if (filterValue) {
      filters[metric.key] = parseFloat(filterValue);
    }
  });

  if (selectedDevice) {
    const deviceData = devices[selectedDevice];
    if (!deviceData) return;

    const filteredAlternatives = deviceData.alternatives.filter(alternative => {
      const altData = newdevices[alternative];
      return Object.keys(filters).every(metricKey => {
        const { number: eolNumber } = extractNumberAndUnit(deviceData[metricKey]);
        const { number: altNumber } = extractNumberAndUnit(altData[metricKey]);
        return altNumber !== null && altNumber >= filters[metricKey] && 
               (eolNumber !== null ? altNumber >= eolNumber : true); 
      });
    });

    // Generate the comparison table for the selected EoL device and its filtered alternatives
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
        resultsHtml += `<td>${calculateDifference(eolValue, altValue)}</td>`;
      });

      resultsHtml += `</tr>`;
    });

    resultsHtml += `</table>`;

    comparisonResults.innerHTML = resultsHtml;
  } else { 
    const filteredNewDevices = Object.keys(newdevices).filter(newDevice => {
      const newDeviceData = newdevices[newDevice];
      return Object.keys(filters).every(metricKey => {
        const { number: newDeviceNumber } = extractNumberAndUnit(newDeviceData[metricKey]);
        return newDeviceNumber !== null && newDeviceNumber >= filters[metricKey];
      });
    });

    // Generate the comparison table showing only the filtered new devices
    let resultsHtml = `<h2>Available Migration Options</h2>`;
    resultsHtml += `
      <table class="comparison-table"> 
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

    comparisonResults.innerHTML = resultsHtml;
  }
}

// Function to clear filters
function clearFilters() {
  metrics.forEach(metric => {
    document.getElementById(`filter_${metric.key}`).value = ''; 
  });
  applyFilters(); 
}

// Attach event listener to the filter button
filterButton.addEventListener('click', applyFilters);

// Attach event listener to the clear filters button
clearFiltersButton.addEventListener('click', clearFilters);

// Display the comparison when a device is selected OR filters are applied
deviceSelect.addEventListener('change', applyFilters);

// Add event listener to the clear button
clearButton.addEventListener('click', () => {
  deviceSelect.selectedIndex = 0; 
  applyFilters(); 
});

// Display the initial comparison table (optional)
applyFilters(); 