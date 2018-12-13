import Global from './Global';
import { circleContent, lineContent, polygonContent } from 'amap-shapes-generator/lib/index';
import { AirspaceInfoCircleServer, AirspaceInfoLineServer, AirspaceInfoPolygonServer } from 'amap-shapes-generator';
import { AirspaceServer } from '../store/PlanList';

interface CurrentDateType {
    start_time: string,
    end_time: string
}

export function combineAirspaceContent(airSpace: AirspaceServer[], type: number = 1): string[] {
    let airSpaceArr: string[] = []
    if (Array.isArray(airSpace)) {
        for (let i of airSpace) {
            if (Global.airspaceType.get(i.airspace_type) === 'circle') {
                airSpaceArr.push(circleContent(i as AirspaceInfoCircleServer, type))
            } else if (Global.airspaceType.get(i.airspace_type) === 'line') {
                airSpaceArr.push(lineContent(i as AirspaceInfoLineServer, type))
            } else if (Global.airspaceType.get(i.airspace_type) === 'polygon') {
                airSpaceArr.push(polygonContent(i as AirspaceInfoPolygonServer, type))
            }
        }
    }
    return airSpaceArr;
}

export function getFormatTime(currentDate: CurrentDateType): string {
    let startTime = currentDate.start_time
    let endTime = currentDate.end_time
    let dateStr = startTime.split(' ')[0]
    let startStr = startTime.split(' ')[1].slice(0, 5)
    let endStr = endTime.split(' ')[1].slice(0, 5)
    return dateStr + ' ' + startStr + '-' + endStr;
}

export const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
