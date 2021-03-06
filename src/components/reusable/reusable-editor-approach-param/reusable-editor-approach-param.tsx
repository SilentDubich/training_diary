import React, {FC, useState} from 'react';
import Styles from '../../content/training/approach/approach-item-type.module.css';
import {ReusableInput} from '../reusable-input/reusable-input';
import {ApproachType} from '../../../data-base/reducers/training-reducer';

type FieldType = 'breakBeforeInSec' | 'weight' | 'repeat' | 'speed' | 'time';
type PropsType = {
	paramTitle: string,
	param: number | null,
	approach: ApproachType,
	updateApproachThunk: (approach: ApproachType, trainingId: number) => void,
	trainingId: number,
	field: FieldType,
	id: string
};



export const ReusableEditorApproachParam: FC<PropsType> = ({paramTitle, param, approach, updateApproachThunk, trainingId, field, id}) => {
	const [ editableParam, setEditableParam ] = useState<number>(param || 0);
	const updateParam = (value: number) => {
		setEditableParam(value);
	};
	const [ editParam, setEditParam ] = useState<boolean>(false);
	const saveValue = (value: number, callback: (bool: boolean) => void, field: FieldType) => {
		approach[field] = value;
		updateApproachThunk(approach, trainingId);
		callback(false);
	};
	window.closeFunctions.push({ elemIds: [ id ], callback: setEditParam });
	return (
		<div id={id}>
			{ !editParam && <div onClick={() => setEditParam(true)} className={Styles.approach_param}>{ paramTitle }: { param ? param : 0 }</div> }
			{
				editParam &&
				<div className={Styles.edit_approach}>
					<div className={Styles.input}>
						<ReusableInput value={editableParam || 0} updateValue={updateParam} type={'number'}/>
					</div>
					<div className={Styles.save} onClick={() => saveValue(editableParam, setEditParam, field)}>Сохранить</div>
				</div>
			}
		</div>
	)
}