import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DefaultStepper from '../../components/Stepper/DefaultStepper';
import useMetaData from "../../context/metaData";
import { CommercialProperty } from '../../styles/pages/CommercialProperty';
import DataPreview from './datapreview';
import AiInsights from './Aiinsights';
import RateFactors from './Ratefactors';
import WhatIf from './Whatif';


const PropertyStepper = () => {
    const { theme } = useMetaData();
    const { state } = useLocation();
    const steps = ['Portfolio Exposure', 'External Data', 'Recommended Rate factors', 'What-if', 'Finalize Rates', 'Deploy Rate Version'];
    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen] = useState(false);
    const [nextVal, setNextVal] = useState(false);
    const [applicationData, setApplicationData] = useState(null);
    const [formData, setFormData] = useState({
        riskValues: {},
        coverageValues: {},
    });

    const handleNextStep = () => {
        setActiveStep(prevStep => prevStep + 1);
    };

    const handlePrevStep = () => {
        setActiveStep(prevStep => prevStep - 1);
        setNextVal(prev => !prev);
    };

    const handleNextVal = () => {
        setNextVal(prev => !prev);
    };

    const handleFormDataUpdate = (type, data) => {
        setFormData(prev => ({
            ...prev,
            [type]: data
        }));
    };

    const handleApplicationDataUpdate = (data) => {
        setApplicationData(data);
    };

    const renderFormContent = () => {
        switch (steps[activeStep]) {
            case 'Portfolio Exposure':
                return (
                    <DataPreview
                        state={state}
                        open={open}
                        setOpen={setOpen}
                        theme={theme}
                        // onUpdateFormData={handleFormDataUpdate}
                        // onUpdateApplicationData={handleApplicationDataUpdate}
                        isReviewStep={false}
                        activeStep={activeStep}
                        onNext={handleNextStep}
                    />
                );
            case 'External Data':
                return (
                    <AiInsights
                        state={state}
                        open={open}
                        setOpen={setOpen}
                        theme={theme}
                        formData={formData}
                        applicationData={applicationData}
                        isReviewStep={true}
                        activeStep={activeStep}
                        onNext={handleNextStep}
                    />
                );
            case 'Recommended Rate factors':
                return (
                    <RateFactors
                        state={{
                            formData,
                            applicationData,
                            selectedProducts: state?.selectedProducts
                        }}
                        theme={theme}
                    />
                );

                case 'What-if':
                    return (
                        <WhatIf
                            state={{
                                formData,
                                applicationData,
                                selectedProducts: state?.selectedProducts
                            }}
                            theme={theme}
                        />
                    );
            default:
                return null;
        }
    };

    return (
        <CommercialProperty theme={theme}>
            <DefaultStepper
                theme={theme}
                state={state}
                steps={steps}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                handleNextVal={handleNextVal}
                nextVal={nextVal}
                setOpen={setOpen}
            >
                {renderFormContent()}
            </DefaultStepper>
        </CommercialProperty>
    );
};

export default PropertyStepper;