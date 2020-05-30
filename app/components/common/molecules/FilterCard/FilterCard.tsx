import React, { useState } from 'react';
import defaultStyles from './FilterCard.css';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

interface FilterCardProps {
  criteriaName: string,
  values: any[],
  wrapperStyle?: React.CSSProperties
}

const FilterCard = ({ criteriaName, values, wrapperStyle }: FilterCardProps) => {
  const [_checks, _setChecks] = useState(new Array(values.length).fill(false));

  const handleCheck = (index: number) => {
    _setChecks([
      ..._checks.map((check, i) => i === index ? !check : check)
    ]);
  }

  return (
    <div
      className={defaultStyles['wrapper']}
      style={{ ...wrapperStyle }}
    >
      <div className={defaultStyles['header']}>
        <div>{criteriaName}</div>
        <div className={defaultStyles['header-subtext']}>More</div>
      </div>
      <Divider style={{ margin: "10px 0" }}/>
      <div>
        { values.map((obj, index) => (
          <div className={defaultStyles['check']}>
            <Checkbox
              checked={_checks[index]}
              onChange={() => { handleCheck(index) }}
              name={`check${index}`}
              color="primary"
            />
            <div>{obj.name}</div>
          </div>
        )) }
      </div>
    </div>
  );
}

export default FilterCard;