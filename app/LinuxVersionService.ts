import {Injectable} from 'angular2/core'
import {LinuxVersion} from "./linuxVersion";

@Injectable()
export class LinuxVersionService{

    private linuxVersions = [
        { id: 0, name: "Ubuntu", number: "1604"},
        { id: 1, name: "Linux Mint", number: "17.3"},
        { id: 2, name: "ElementaryOS", number: "0.3.2"},
        { id: 3, name: "Fedora", number: "23"}
    ]

    getCurrentLinuxVersions() : Array<LinuxVersion>{
        //this would probably call a webservice
        return this.linuxVersions;
    }

    addLinuxVersion(name: string, version: string) : void {
        this.linuxVersions.push({
            id: this.linuxVersions.length,
            name: name,
            number: version
        });
    }

    getLinuxVersion(id:number) : LinuxVersion{
        return this.linuxVersions.filter(lv => lv.id === id)[0];
    }
}
