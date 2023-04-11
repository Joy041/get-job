import { getShoppingCart } from "../utilities/FakeDb";

const appliedJobLoader = async () => {
    const loaderJob = await fetch('/featuredjob.json');
    const jobs = await loaderJob.json();

    const storeApplyData = getShoppingCart();
        const saveApply = [];

        for (const id in storeApplyData){
            const addedApply = jobs.find( job => job.id === id)
            if(addedApply){
                const quantity = storeApplyData[id];
                addedApply.quantity = quantity;
                saveApply.push(addedApply);
            }
        }
       return saveApply; 
}

export default appliedJobLoader;