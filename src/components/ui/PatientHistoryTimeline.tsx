import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  FaStethoscope,
  FaSyringe,
  FaHospitalAlt,
  FaNotesMedical,
} from 'react-icons/fa';

const PatientHistoryTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: '#f0f8ff', color: '#52b788' }}
        contentArrowStyle={{ borderRight: '7px solid  #f0f8ff' }}
        date='Tuesday, August 26th, 2014'
        iconStyle={{ background: '#0e76a8', color: '#fff' }}
        icon={<FaStethoscope />}>
        <h4 className='vertical-timeline-element-title font-bold text-gray-500'>
          Asthma Check-Up
        </h4>
        <p className='text-sm text-gray-600'>
          with Dr. Henry Seven at Community Hospital
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: '#f0f8ff', color: '#52b788' }}
        contentArrowStyle={{ borderRight: '7px solid  #fef9c3' }}
        date='Saturday, March 1st, 2014'
        iconStyle={{ background: '#f59e0b', color: '#fff' }}
        icon={<FaHospitalAlt />}>
        <h4 className='vertical-timeline-element-title font-bold text-gray-500'>
          Gall Bladder Surgery
        </h4>
        <p className='text-sm text-gray-600'>at Ashby Medical Center</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: '#f0f8ff', color: '#52b788' }}
        contentArrowStyle={{ borderRight: '7px solid  #d1fae5' }}
        date='Tuesday, February 15th, 2014'
        iconStyle={{ background: '#10b981', color: '#fff' }}
        icon={<FaSyringe />}>
        <h4 className='vertical-timeline-element-title font-bold text-gray-500'>
          Influenza Virus Vaccine
        </h4>
        <p className='text-sm text-gray-600'>
          Intramuscular Injection at Ashby Medical Center
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: '#f0f8ff', color: '#52b788' }}
        contentArrowStyle={{ borderRight: '7px solid  #e0f2fe' }}
        date='Wednesday, December 17th, 2013'
        iconStyle={{ background: '#3b82f6', color: '#fff' }}
        icon={<FaNotesMedical />}>
        <h4 className='vertical-timeline-element-title font-bold text-gray-500'>
          Laparoscopic Cholecystectomy
        </h4>
        <p className='text-sm text-gray-600'>at Ashby Medical Center</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default PatientHistoryTimeline;
