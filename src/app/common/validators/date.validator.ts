import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

export type ValidationResult = null | {
	[errorName: string]: boolean;
}


function checkSelectedDate(date){

	let selected_day = date.date()
	let selected_month = date.month() //January is 0!
	let selected_year = date.year()

	let date_today = new Date();
	let day_now = String(date_today.getDate());
	let month_now = String(date_today.getMonth()); //January is 0!
	let year_now = date_today.getFullYear();
	if (Number(day_now) < 10) {
		day_now = '0' + String(day_now);
	}
	if (Number(month_now) < 10) {
		month_now = '0' + String(month_now);
	}
	if (selected_year < Number(year_now)) {
		return false
	} else if (selected_year == year_now) {
			if (selected_month < Number(month_now)) {
				return false
			} else if (selected_month == Number(month_now)){
					if (selected_day <= Number(day_now)) {
						return false
					}
				}
		}
	return true
}

export class DateValidator {
	static validDate(control: FormControl): ValidationResult {
		if (control.value) {
			return checkSelectedDate(control.value)? null : { 'invalidDate': true };
		} else {
			return { 'invalidDate': true }
		}
	}
}