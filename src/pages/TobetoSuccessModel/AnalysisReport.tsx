import React from 'react'
import Navi from '../../components/navbar/Navi'
import ChartComponent from '../profile/myProfile/ChartComponent'

function AnalysisReport() {
    return (
        <div>
            <Navi />
            <div className="bg-light">
                <div className="container px-7 pt-10 pb-5">
                    <h6 className="text-center f-size-24 text-secondary">
                        Tobeto ”İşte Başarı Modeli”
                    </h6>
                    <p className="h6 text-center">
                        Analiz Raporum
                    </p>
                </div>
            </div>
            <ChartComponent />

        </div>
    )
}

export default AnalysisReport