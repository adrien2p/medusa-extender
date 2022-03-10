import * as dedent from 'dedent';

export function getEntityTemplate(entityName: string): string {
	return dedent`
        import { Column, Entity } from "typeorm"; 
        import { Entity as MedusaEntity } from "medusa-extender";
        
        @MedusaEntity({ resolutionKey: "${entityName}" })
        @Entity()
        export class ${entityName} {
            @Column()
            name: string;
        }
    `;
}
