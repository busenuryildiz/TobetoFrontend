import React, { useEffect, useState } from 'react';
import Navi from '../../components/navbar/Navi'
import { AppDispatch } from '../../store';
import ChartComponent from '../profile/myProfile/ChartComponent'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/slices/chartDataSlice';
import { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import descriptions from './descriptions';

function AnalysisReport() {
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.user);
    const [chartData, setChartData] = useState<Record<string, number>>({});

    useEffect(() => {
        if (user) {
            dispatch(fetchData({ userId: user.id, surveyId: 1 }))
                .then((action: PayloadAction<Record<string, number>, string, { arg: { userId: string; surveyId: number; }; requestId: string; requestStatus: "fulfilled"; }, never> | PayloadAction<unknown, string, { arg: { userId: string; surveyId: number; }; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), SerializedError>) => {
                    const data: Record<string, number> = action.payload as Record<string, number>;
                    setChartData(data);
                })
                .catch((error: any) => {
                    console.error('Error fetching data:', error); // Log any errors
                });
        }
    }, [dispatch, user?.id]);
    const titles = ["Bu yetkinlik nedir ve neden önemli?", "Geliştirmek için ne yapmalı?", "Bu alanda önerilen eğitimler"];
    const accordionItems: Record<string, { description: string[] | string }[]> = {};

    Object.keys(chartData).forEach((key, keyIndex) => {
        const start = keyIndex * titles.length;
        const end = start + titles.length;
        const descriptionsSlice = descriptions.slice(start, end);
        accordionItems[key] = titles.map((title, index) => ({ title, description: descriptionsSlice[index] }));
    });

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
            <section className='py-2'>
                <div className="container mb-6 mt-6">
                    <div className='p-6 mb-6 tobeto-light-bg'>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="text-center mobile-d-block">
                                        <ChartComponent />
                                        <div className="accordion" id="accordionExample" >
                                            {Object.entries(chartData).map(([key, value], index) => {
                                                const accordionItemsCount = accordionItems[key].length; // Anahtarın altındaki accordion item sayısı
                                                return (
                                                    <div key={index} className="mt-8">
                                                        <div className="p-6 rounded-end border-4 border-start bg-light-light border-light">
                                                            <div className="row">
                                                                <div className="col-lg-8 col-md-8 col-sm-8 col-12 text-start">
                                                                    <h3 className="h6 mb-0 fw-bolder text-primary">
                                                                        {key}
                                                                    </h3>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4 col-sm-8 col-12 d-flex mobile-justify-content-start">
                                                                    <span className="badge bg-secondary text-white m-mt-5 mobile-d-block" style={{ fontSize: '16px' }}>
                                                                        Yetkinlik Puanı: {Number(value)}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {accordionItems[key].map((item, accordionIndex) => {
                                                            const finalIndex = index * accordionItemsCount + accordionIndex + 1; // Anahtarın sırası ve accordion itemin sırası ile son indeksi belirle
                                                            return (
                                                                <div className="accordion-item bg-white" key={finalIndex}>
                                                                    <h2 className="accordion-header" id={`heading${finalIndex}`}>
                                                                        <button className="accordion-button result collapsed" aria-controls={`collapse${finalIndex}`} aria-expanded="false" data-bs-target={`#collapse${finalIndex}`} data-bs-toggle="collapse" type="button">
                                                                            <span className="fw-bolder">{titles[accordionIndex]}</span>
                                                                        </button>
                                                                    </h2>
                                                                    <div className="result-collapse accordion-collapse collapse" aria-labelledby={`heading${finalIndex}`} data-bs-parent="#accordionExample" id={`collapse${finalIndex}`}>
                                                                        <div className="accordion-body">
                                                                            <div className="accordion-body bg-white text-start">
                                                                                {Array.isArray(item.description) ? (
                                                                                    <ul>
                                                                                        {item.description.map((desc, i) => (
                                                                                            <li key={i}>{desc}</li>
                                                                                        ))}
                                                                                    </ul>
                                                                                ) : (
                                                                                    <p>{item.description}</p>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AnalysisReport;
