import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState, useEffect } from 'react';
import axios from 'axios';

const  InventoryData=()=> {

    const [inventoryNames, setInventoryNames] = useState(["pcm","condom"]);
    const [quantities, setQuantities] = useState([1,2]);

    useEffect(() => {
        const fetchInventoryItems = async () => {
          try {
            await axios.get('http://localhost:5001/inventory').then((res)=>{
                const data = res.data;    
                const _inventoryNames = data.map(item => item.inventory_name);
                const _quantities = data.map(item => item.quantity);
                setQuantities(_quantities);
                setInventoryNames(_inventoryNames);
                console.log(quantities);
            }).catch(()=>{
                console.log("Data is not registered");
            }); // Update the API endpoint URL
            
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchInventoryItems();
      }, []);


      return (
        <BarChart
          xAxis={[
            {
              id: 'barCategories',
              data: inventoryNames,
              scaleType: 'band',
            },
          ]}
          series={[
            {
              data: quantities,
            },
          ]}
          width={500}
          height={300}
        />
      );
    
}

export default InventoryData;