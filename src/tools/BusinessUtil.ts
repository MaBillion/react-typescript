import Global from './Global';
import { circleContent, lineContent, polygonContent } from 'amap-shapes-generator/lib/index';

interface AirSpaceType {
    airspace_type: number
}

interface CurrentDateType {
    start_time: string,
    end_time: string
}

export function combineAirspaceContent(airSpace: AirSpaceType, type: number = 1): string[] {
    let airSpaceArr: string[] = []
    if (Array.isArray(airSpace)) {
        for (let i of airSpace) {
            if (Global.airspaceType.get(i.airspace_type) === 'circle') {
                airSpaceArr.push(circleContent(i, type))
            } else if (Global.airspaceType.get(i.airspace_type) === 'line') {
                airSpaceArr.push(lineContent(i, type))
            } else if (Global.airspaceType.get(i.airspace_type) === 'polygon') {
                airSpaceArr.push(polygonContent(i, type))
            }
        }
    }
    return airSpaceArr
}

export function getFormatTime(currentDate: CurrentDateType): string {
    let startTime = currentDate.start_time
    let endTime = currentDate.end_time
    let dateStr = startTime.split(' ')[0]
    let startStr = startTime.split(' ')[1].slice(0, 5)
    let endStr = endTime.split(' ')[1].slice(0, 5)
    return dateStr + ' ' + startStr + '-' + endStr
}
